/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VestingCoachVault,
  VestingCoachVaultInterface,
} from "../../../contracts/strategies/VestingCoachVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract IPolyCoachFactory",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalCoachFund",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ownerFid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_trainingName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_trainingDesc",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentCheckInNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "checkInReturn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "completedReturn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "detailURL",
        type: "string",
      },
    ],
    name: "CheckIn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "donateToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donateAmount",
        type: "uint256",
      },
    ],
    name: "ClaimDonation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "donateToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donateAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "memo",
        type: "string",
      },
    ],
    name: "Donation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "supervisor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fid",
        type: "uint256",
      },
    ],
    name: "Supervise",
    type: "event",
  },
  {
    inputs: [],
    name: "COMPLETED_CHECK_IN_NUMBER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_detailURL",
        type: "string",
      },
    ],
    name: "checkIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkInDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkInHistory",
    outputs: [
      {
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        internalType: "string",
        name: "detailURL",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkInReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "completedReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCheckInNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_donateToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_donateAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donationHistory",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "donateToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "donateAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "memo",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPolyCoachFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isDonor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isSupervisor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastCheckInTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerFid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "starttime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fid",
        type: "uint256",
      },
    ],
    name: "supervise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCoachFund",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalDonatedTokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totalDonationStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trainingDesc",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trainingName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260026001556001600a5534801561001a57600080fd5b5060405161200138038061200183398101604081905261003991610292565b856001600160a01b03811661006957604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61007281610171565b50600280546001600160a01b0319166001600160a01b03871617905560048490556003839055600b6100a483826103be565b50600c6100b182826103be565b506001546100c0600286610492565b6100ca9190610492565b60058190556001546100db916104b4565b6100e590856104d1565b600655600554158015906100fb57506000600654115b61015c5760405162461bcd60e51b815260206004820152602c60248201527f56657374696e67436f6163685661756c743a204e6f742076616c696420746f7460448201526b30b621b7b0b1b4233ab7321760a11b6064820152608401610060565b5050426008819055600955506104e492505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146101d657600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261020057600080fd5b81516001600160401b03811115610219576102196101d9565b604051601f8201601f19908116603f011681016001600160401b0381118282101715610247576102476101d9565b60405281815283820160200185101561025f57600080fd5b60005b8281101561027e57602081860181015183830182015201610262565b506000918101602001919091529392505050565b60008060008060008060c087890312156102ab57600080fd5b86516102b6816101c1565b60208801519096506102c7816101c1565b6040880151606089015160808a015192975090955093506001600160401b038111156102f257600080fd5b6102fe89828a016101ef565b60a089015190935090506001600160401b0381111561031c57600080fd5b61032889828a016101ef565b9150509295509295509295565b600181811c9082168061034957607f821691505b60208210810361036957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156103b957806000526020600020601f840160051c810160208510156103965750805b601f840160051c820191505b818110156103b657600081556001016103a2565b50505b505050565b81516001600160401b038111156103d7576103d76101d9565b6103eb816103e58454610335565b8461036f565b6020601f82116001811461041f57600083156104075750848201515b600019600385901b1c1916600184901b1784556103b6565b600084815260208120601f198516915b8281101561044f578785015182556020948501946001909201910161042f565b508482101561046d5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b6000826104af57634e487b7160e01b600052601260045260246000fd5b500490565b80820281158282048414176104cb576104cb61047c565b92915050565b818103818111156104cb576104cb61047c565b611b0e806104f36000396000f3fe60806040526004361061018f5760003560e01c80638da58897116100d6578063a80acea11161007f578063e54991f111610059578063e54991f11461049c578063f2fde38b146104bc578063ff4bfdac146104dc57600080fd5b8063a80acea1146103f8578063b948c80714610441578063c45a01551461046f57600080fd5b80639feeba60116100b05780639feeba6014610392578063a0c00247146103c2578063a2fede6b146103e257600080fd5b80638da588971461031a5780638da5cb5b14610330578063921ca2601461037c57600080fd5b80634b8f47b711610138578063715018a611610112578063715018a6146102c05780637b6ef4fc146102d557806381a24459146102ea57600080fd5b80634b8f47b71461026857806364c968331461028a57806370ee2403146102aa57600080fd5b80632bc3d7aa116101695780632bc3d7aa146101f057806336741424146102305780633b60e3461461024657600080fd5b80630382cfe21461019b578063101b97ec146101c45780631145a71e146101da57600080fd5b3661019657005b600080fd5b3480156101a757600080fd5b506101b1600a5481565b6040519081526020015b60405180910390f35b3480156101d057600080fd5b506101b160095481565b3480156101e657600080fd5b506101b160055481565b3480156101fc57600080fd5b5061022061020b3660046114a4565b60116020526000908152604090205460ff1681565b60405190151581526020016101bb565b34801561023c57600080fd5b506101b160035481565b34801561025257600080fd5b506102666102613660046115c3565b6104f2565b005b34801561027457600080fd5b5061027d610972565b6040516101bb9190611690565b34801561029657600080fd5b506102666102a53660046116a3565b610a00565b3480156102b657600080fd5b506101b160045481565b3480156102cc57600080fd5b50610266610b8b565b3480156102e157600080fd5b5061027d610b9f565b3480156102f657600080fd5b506102206103053660046114a4565b60126020526000908152604090205460ff1681565b34801561032657600080fd5b506101b160085481565b34801561033c57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101bb565b34801561038857600080fd5b506101b160065481565b34801561039e57600080fd5b506103b26103ad3660046116a3565b610bac565b6040516101bb94939291906116bc565b3480156103ce57600080fd5b506103576103dd3660046116a3565b610c8d565b3480156103ee57600080fd5b506101b160075481565b34801561040457600080fd5b5061042c6104133660046114a4565b6010602052600090815260409020805460019091015482565b604080519283526020830191909152016101bb565b34801561044d57600080fd5b5061046161045c3660046116a3565b610cc4565b6040516101bb929190611717565b34801561047b57600080fd5b506002546103579073ffffffffffffffffffffffffffffffffffffffff1681565b3480156104a857600080fd5b506102666104b7366004611745565b610e08565b3480156104c857600080fd5b506102666104d73660046114a4565b611356565b3480156104e857600080fd5b506101b160015481565b6104fa6113ba565b600154600754600161050c91906117d7565b1061059e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f56657374696e67436f6163685661756c743a20416c726561647920636f6d706c60448201527f657465642e00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b42600a546009546105af91906117d7565b111561063d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f56657374696e67436f6163685661756c743a20546865206e657874206368656360448201527f6b2d696e206973206e6f74206f70656e000000000000000000000000000000006064820152608401610595565b6040805180820190915282815260208101829052600e8054600181018255600091909152815160029091027fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd019081906106979082611892565b50602082015160018201906106ac9082611892565b5050506001600760008282546106c291906117d7565b909155505042600955600554604051339180156108fc02916000818181858888f193505050501580156106f9573d6000803e3d6000fd5b50600154600754036107b757600654604051339180156108fc02916000818181858888f19350505050158015610733573d6000803e3d6000fd5b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663522e11776040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561079e57600080fd5b505af11580156107b2573d6000803e3d6000fd5b505050505b60005b600f54811015610922576000600f82815481106107d9576107d96119ab565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff168083526010909152604082206001810154815492945090929161082091906119da565b90508015610917576040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810182905273ffffffffffffffffffffffffffffffffffffffff84169063a9059cbb906044016020604051808303816000875af115801561089b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf91906119ed565b506040805133815273ffffffffffffffffffffffffffffffffffffffff851660208201529081018290527feeba2b44b4249b6278525c676f334a72a40d7ff9cbe85e045b61ad0db5597c749060600160405180910390a15b5050506001016107ba565b507f0e83385008d4d09e619f49ac56890251ab88fa1cb4f83eed1eec71726c548f623360035460075460055460065487876040516109669796959493929190611a0f565b60405180910390a15050565b600c805461097f906117f0565b80601f01602080910402602001604051908101604052809291908181526020018280546109ab906117f0565b80156109f85780601f106109cd576101008083540402835291602001916109f8565b820191906000526020600020905b8154815290600101906020018083116109db57829003601f168201915b505050505081565b60015460075410610a93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f56657374696e67436f6163685661756c743a20416c726561647920636f6d706c60448201527f657465642e0000000000000000000000000000000000000000000000000000006064820152608401610595565b6002546040517f3bb00cb800000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690633bb00cb890602401600060405180830381600087803b158015610afe57600080fd5b505af1158015610b12573d6000803e3d6000fd5b50503360008181526012602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055815192835282018590527ffedd6412ce26e8a19ad0d176ee8a5ccbd80a03d758cb8777225ba332b3fb2cb0935001905060405180910390a150565b610b936113ba565b610b9d600061140d565b565b600b805461097f906117f0565b600d8181548110610bbc57600080fd5b6000918252602090912060049091020180546001820154600283015460038401805473ffffffffffffffffffffffffffffffffffffffff9485169650929093169390929091610c0a906117f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c36906117f0565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b5050505050905084565b600f8181548110610c9d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600e8181548110610cd457600080fd5b9060005260206000209060020201600091509050806000018054610cf7906117f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d23906117f0565b8015610d705780601f10610d4557610100808354040283529160200191610d70565b820191906000526020600020905b815481529060010190602001808311610d5357829003601f168201915b505050505090806001018054610d85906117f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610db1906117f0565b8015610dfe5780601f10610dd357610100808354040283529160200191610dfe565b820191906000526020600020905b815481529060010190602001808311610de157829003601f168201915b5050505050905082565b60015460075410610e9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f56657374696e67436f6163685661756c743a20416c726561647920636f6d706c60448201527f657465642e0000000000000000000000000000000000000000000000000000006064820152608401610595565b6002546040517f1197523300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820186905290911690631197523390604401602060405180830381865afa158015610f12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3691906119ed565b610fc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f56657374696e67436f6163685661756c743a20496c6c6567616c20646f6e617460448201527f696f6e20617474656d70742e00000000000000000000000000000000000000006064820152608401610595565b73ffffffffffffffffffffffffffffffffffffffff84166000908152601060205260408120805490910361106157600f80546001810182556000919091527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87161790555b8381600001600082825461107591906117d7565b90915550506040805160808101825273ffffffffffffffffffffffffffffffffffffffff8088168252336020830190815292820187815260608301868152600d8054600181018255600091909152845160049091027fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5810180549286167fffffffffffffffffffffffff000000000000000000000000000000000000000093841617815596517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb6820180549190961692169190911790935590517fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb7830155519192917fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb8909101906111a69082611892565b50506040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810186905273ffffffffffffffffffffffffffffffffffffffff871691506323b872dd906064016020604051808303816000875af1158015611222573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124691906119ed565b506002546040517f386bc05a00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8781166024830152604482018790529091169063386bc05a90606401600060405180830381600087803b1580156112c157600080fd5b505af11580156112d5573d6000803e3d6000fd5b5050336000818152601160205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f691ccb3f41e6250018a2435e13db57c12642555239c3dbe95bedb29060df0517935061134792508690899089908890611a76565b60405180910390a15050505050565b61135e6113ba565b73ffffffffffffffffffffffffffffffffffffffff81166113ae576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401610595565b6113b78161140d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b9d576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610595565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff811681146113b757600080fd5b6000602082840312156114b657600080fd5b81356114c181611482565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261150857600080fd5b813567ffffffffffffffff811115611522576115226114c8565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff8211171561158e5761158e6114c8565b6040528181528382016020018510156115a657600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156115d657600080fd5b823567ffffffffffffffff8111156115ed57600080fd5b6115f9858286016114f7565b925050602083013567ffffffffffffffff81111561161657600080fd5b611622858286016114f7565b9150509250929050565b6000815180845260005b8181101561165257602081850181015186830182015201611636565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006114c1602083018461162c565b6000602082840312156116b557600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8516815273ffffffffffffffffffffffffffffffffffffffff8416602082015282604082015260806060820152600061170d608083018461162c565b9695505050505050565b60408152600061172a604083018561162c565b828103602084015261173c818561162c565b95945050505050565b6000806000806080858703121561175b57600080fd5b843561176681611482565b93506020850135925060408501359150606085013567ffffffffffffffff81111561179057600080fd5b61179c878288016114f7565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156117ea576117ea6117a8565b92915050565b600181811c9082168061180457607f821691505b60208210810361183d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561188d57806000526020600020601f840160051c8101602085101561186a5750805b601f840160051c820191505b8181101561188a5760008155600101611876565b50505b505050565b815167ffffffffffffffff8111156118ac576118ac6114c8565b6118c0816118ba84546117f0565b84611843565b6020601f82116001811461191257600083156118dc5750848201515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600385901b1c1916600184901b17845561188a565b6000848152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08516915b828110156119605787850151825560209485019460019092019101611940565b508482101561199c57868401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b60f8161c191681555b50505050600190811b01905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b818103818111156117ea576117ea6117a8565b6000602082840312156119ff57600080fd5b815180151581146114c157600080fd5b73ffffffffffffffffffffffffffffffffffffffff8816815286602082015285604082015284606082015283608082015260e060a08201526000611a5660e083018561162c565b82810360c0840152611a68818561162c565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015273ffffffffffffffffffffffffffffffffffffffff8416604082015282606082015260a060808201526000611acd60a083018461162c565b97965050505050505056fea2646970667358221220004ffbce360072eb7e67139f90328498596cd4bc6ae4b1202aaea5a163842aea64736f6c634300081a0033";

type VestingCoachVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingCoachVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VestingCoachVault__factory extends ContractFactory {
  constructor(...args: VestingCoachVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _totalCoachFund: PromiseOrValue<BigNumberish>,
    _ownerFid: PromiseOrValue<BigNumberish>,
    _trainingName: PromiseOrValue<string>,
    _trainingDesc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VestingCoachVault> {
    return super.deploy(
      _owner,
      _factory,
      _totalCoachFund,
      _ownerFid,
      _trainingName,
      _trainingDesc,
      overrides || {}
    ) as Promise<VestingCoachVault>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _totalCoachFund: PromiseOrValue<BigNumberish>,
    _ownerFid: PromiseOrValue<BigNumberish>,
    _trainingName: PromiseOrValue<string>,
    _trainingDesc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _factory,
      _totalCoachFund,
      _ownerFid,
      _trainingName,
      _trainingDesc,
      overrides || {}
    );
  }
  override attach(address: string): VestingCoachVault {
    return super.attach(address) as VestingCoachVault;
  }
  override connect(signer: Signer): VestingCoachVault__factory {
    return super.connect(signer) as VestingCoachVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingCoachVaultInterface {
    return new utils.Interface(_abi) as VestingCoachVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VestingCoachVault {
    return new Contract(address, _abi, signerOrProvider) as VestingCoachVault;
  }
}
