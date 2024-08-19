// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


interface IERC20WithSymbol {
    function symbol() external returns(string memory);
}

contract HelloPayRedPackageFactory is Ownable {
    enum RedPackageType { AVERAGE, RANDOM }

    struct RedPackageInfo {
        RedPackageType redPackageType;
        bool isNativeToken;
        IERC20 token;
        uint256 totalAmount;
        uint256 remainAmount;
        uint256 totalNumber;
        uint256 remainNumber;
        uint256 starttime;
        uint256 fid;
        address account;
        string symbol;
        mapping(address => uint256) accounts;
    }

    uint256 public MIN_NUMBER = 10;
    uint256 public MAX_NUMBER = 100000;

    uint256 public expiration_time = 30 days;
    uint256 public globalIndex;

    mapping(IERC20 => bool) public allowed_tokens;
    mapping(uint256 => RedPackageInfo) public redPackages;

    event NewRedPackage(uint256 index, RedPackageType _redPackgeType, IERC20 _token, uint256 _totalAmount, uint256 _totalNumber, uint256 _fid, address _account, string _memo, string _symbol);
    event Claim(uint256 index, IERC20 _token, uint256 _claimAmount, uint256 _fid, address _account);
    event GetBack(uint256 index, IERC20 _token, uint256 _claimAmount, uint256 _fid, address _account);

    constructor(IERC20[] memory _allowed_tokens) Ownable(msg.sender) {
        for (uint256 i; i < _allowed_tokens.length; i++) {
            allowed_tokens[_allowed_tokens[i]] = true;
        }
    }

    function setAllowedTokens(IERC20[] memory _allowed_tokens, bool[] memory _status) external onlyOwner {
        for (uint256 i; i < _allowed_tokens.length; i++) {
            allowed_tokens[_allowed_tokens[i]] = _status[i];
        }
    }

    function sendRedPackage(RedPackageType _redPackgeType, IERC20 _token, uint256 _totalAmount, uint256 _totalNumber, uint256 _fid, string memory _memo) external payable {
        require(_totalNumber >= MIN_NUMBER && _totalNumber <= MAX_NUMBER, "Not allowed number.");
        require(_fid > 0, "Invalid fid.");
        RedPackageInfo storage targetRedPackage = redPackages[globalIndex];
        bool isNativeToken;

        if (_token == IERC20(address(0))) {
            _totalAmount = msg.value;
            isNativeToken = true;
            targetRedPackage.symbol = 'MATIC';
        } else {
            require(allowed_tokens[_token], "Not allowed token.");
            _token.transferFrom(msg.sender, address(this), _totalAmount);
            targetRedPackage.symbol = IERC20WithSymbol(address(_token)).symbol();
        }

        targetRedPackage.redPackageType = _redPackgeType;
        targetRedPackage.isNativeToken = isNativeToken;
        targetRedPackage.token = _token;
        targetRedPackage.totalAmount = _totalAmount;
        targetRedPackage.remainAmount = _totalAmount;
        targetRedPackage.totalNumber = _totalNumber;
        targetRedPackage.remainNumber = _totalNumber;
        targetRedPackage.starttime = block.timestamp;
        targetRedPackage.fid = _fid;
        targetRedPackage.account = msg.sender;

        emit NewRedPackage(globalIndex, _redPackgeType, _token, _totalAmount, _totalNumber, _fid, msg.sender, _memo, targetRedPackage.symbol);

        globalIndex++;
    }

    function claimRedPackage(uint256 _fid, uint256 _targetIndex) external {
        RedPackageInfo storage targetRedPackage = redPackages[_targetIndex];
        require(targetRedPackage.fid > 0, "Not exist red package.");
        require(targetRedPackage.starttime + expiration_time > block.timestamp, "Expiration.");
        require(targetRedPackage.remainNumber > 0, "Completed.");
        require(targetRedPackage.accounts[msg.sender] == 0, "Already Claimed.");
        require(_fid > 0, "Invaild fid.");

        uint256 claimedAmount;

        if (targetRedPackage.redPackageType == RedPackageType.AVERAGE) {
            if (targetRedPackage.remainNumber == 1) {
                claimedAmount = targetRedPackage.remainAmount;
            } else {
                claimedAmount = targetRedPackage.totalAmount / targetRedPackage.totalNumber;
            }
        } else {
            if (targetRedPackage.remainNumber == 1) {
                claimedAmount = targetRedPackage.remainAmount;
            } else {
                while (claimedAmount == 0) {
                    claimedAmount = uint256(keccak256(abi.encodePacked(_fid, msg.sender, block.difficulty, block.timestamp))) %
                        targetRedPackage.remainAmount;
                }
            }
                
        }

        if (targetRedPackage.isNativeToken) {
            payable(msg.sender).transfer(claimedAmount);
        } else {
            targetRedPackage.token.transfer(msg.sender, claimedAmount);
        }

        targetRedPackage.remainAmount -= claimedAmount;
        targetRedPackage.remainNumber -= 1;
        targetRedPackage.accounts[msg.sender] = _fid;

        emit Claim(_targetIndex, targetRedPackage.token, claimedAmount, _fid, msg.sender);
    }

    function getBackExpiratedRedPackage(uint256 _targetIndex) external {
        RedPackageInfo storage targetRedPackage = redPackages[_targetIndex];
        require(targetRedPackage.account == msg.sender, "Not red package sender.");
        require(targetRedPackage.remainAmount > 0, "Zero remain amount.");
        require(targetRedPackage.starttime + expiration_time >= block.timestamp, "Not Expiration.");

        uint256 claimedAmount = targetRedPackage.remainAmount;

        if (targetRedPackage.isNativeToken) {
            payable(msg.sender).transfer(claimedAmount);
        } else {
            targetRedPackage.token.transfer(msg.sender, claimedAmount);
        }

        targetRedPackage.remainAmount = 0;
        targetRedPackage.remainNumber = 0;

        emit GetBack(_targetIndex, targetRedPackage.token, claimedAmount, targetRedPackage.fid, msg.sender);
    }
}