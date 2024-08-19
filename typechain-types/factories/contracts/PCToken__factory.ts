/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { PCToken, PCTokenInterface } from "../../contracts/PCToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPolyCoachFactory",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
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
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
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
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
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
    inputs: [],
    name: "isAllowedTransferGlobally",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "setIsAllowedTransferGlobally",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "setTransferWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61016060405234801561001157600080fd5b5060405161243d38038061243d833981016040819052610030916102bd565b6040518060400160405280600f81526020016e2837b63ca1b7b0b1b4102a37b5b2b760891b81525080604051806040016040528060018152602001603160f81b815250336040518060400160405280600f81526020016e2837b63ca1b7b0b1b4102a37b5b2b760891b815250604051806040016040528060058152602001640869e8286960db1b81525081600390816100c9919061038c565b5060046100d6828261038c565b50506005805460ff19169055506001600160a01b03811661011257604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61011b816101f2565b5061012782600661024c565b6101205261013681600761024c565b61014052815160208084019190912060e052815190820120610100524660a0526101c360e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250600980546001600160a01b0319166001600160a01b03929092169190911790556104bc565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602083511015610268576102618361027f565b9050610279565b81610273848261038c565b5060ff90505b92915050565b600080829050601f815111156102aa578260405163305a27a960e01b8152600401610109919061044a565b80516102b582610498565b179392505050565b6000602082840312156102cf57600080fd5b81516001600160a01b03811681146102e657600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061031757607f821691505b60208210810361033757634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561038757806000526020600020601f840160051c810160208510156103645750805b601f840160051c820191505b818110156103845760008155600101610370565b50505b505050565b81516001600160401b038111156103a5576103a56102ed565b6103b9816103b38454610303565b8461033d565b6020601f8211600181146103ed57600083156103d55750848201515b600019600385901b1c1916600184901b178455610384565b600084815260208120601f198516915b8281101561041d57878501518255602094850194600190920191016103fd565b508482101561043b5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b81811015610478576020818601810151604086840101520161045b565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103375760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611f276105166000396000611101015260006110d401526000610e1501526000610ded01526000610d4801526000610d7201526000610d9c0152611f276000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806379cc6790116100ee578063a9059cbb11610097578063da08c5a311610071578063da08c5a3146103a9578063dabe7283146103bc578063dd62ed3e146103cf578063f2fde38b146103e257600080fd5b8063a9059cbb14610363578063c45a015514610376578063d505accf1461039657600080fd5b806384b0196e116100c857806384b0196e146102fc5780638da5cb5b1461031757806395d89b411461035b57600080fd5b806379cc6790146102ce5780637ecebe00146102e15780638456cb59146102f457600080fd5b80633f4ba83a1161015b5780634ed9ac53116101355780634ed9ac53146102605780635c975abb1461028557806370a0823114610290578063715018a6146102c657600080fd5b80633f4ba83a1461023057806340c10f191461023a57806342966c681461024d57600080fd5b806323b872dd1161018c57806323b872dd14610206578063313ce567146102195780633644e5151461022857600080fd5b806306fdde03146101b3578063095ea7b3146101d157806318160ddd146101f4575b600080fd5b6101bb6103f5565b6040516101c89190611b80565b60405180910390f35b6101e46101df366004611bbc565b610487565b60405190151581526020016101c8565b6002545b6040519081526020016101c8565b6101e4610214366004611be8565b6104a1565b604051601281526020016101c8565b6101f86104c5565b6102386104d4565b005b610238610248366004611bbc565b6104e6565b61023861025b366004611c29565b610635565b6009546101e49074010000000000000000000000000000000000000000900460ff1681565b60055460ff166101e4565b6101f861029e366004611c42565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b610238610642565b6102386102dc366004611bbc565b610654565b6101f86102ef366004611c42565b61066d565b610238610698565b6103046106a8565b6040516101c89796959493929190611c5f565b600554610100900473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c8565b6101bb61070a565b6101e4610371366004611bbc565b610719565b6009546103369073ffffffffffffffffffffffffffffffffffffffff1681565b6102386103a4366004611d20565b610727565b6102386103b7366004611c42565b6108d4565b6102386103ca366004611da5565b610a1d565b6101f86103dd366004611dc2565b610a6f565b6102386103f0366004611c42565b610b6b565b60606003805461040490611dfb565b80601f016020809104026020016040519081016040528092919081815260200182805461043090611dfb565b801561047d5780601f106104525761010080835404028352916020019161047d565b820191906000526020600020905b81548152906001019060200180831161046057829003601f168201915b5050505050905090565b600033610495818585610bcc565b60019150505b92915050565b6000336104af858285610bd9565b6104ba858585610c83565b506001949350505050565b60006104cf610d2e565b905090565b6104dc610e66565b6104e4610ebf565b565b6005543390610100900473ffffffffffffffffffffffffffffffffffffffff168114806105bb5750600954604080517f1d4632ac000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808516931691631d4632ac9160048083019260209291908290030181865afa15801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a39190611e4e565b73ffffffffffffffffffffffffffffffffffffffff16145b610626576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f5043546f6b656e3a204e6f7420616c6c6f776564206d696e742e00000000000060448201526064015b60405180910390fd5b6106308383610f3c565b505050565b61063f3382610f98565b50565b61064a610e66565b6104e46000610ff4565b61065f823383610bd9565b6106698282610f98565b5050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526008602052604081205461049b565b6106a0610e66565b6104e4611072565b6000606080600080600060606106bc6110cd565b6106c46110fa565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b60606004805461040490611dfb565b600033610495818585610c83565b83421115610764576040517f627913020000000000000000000000000000000000000000000000000000000081526004810185905260240161061d565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886107be8c73ffffffffffffffffffffffffffffffffffffffff16600090815260086020526040902080546001810190915590565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061082682611127565b905060006108368287878761116f565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108bd576040517f4b800e4600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301528b16602482015260440161061d565b6108c88a8a8a610bcc565b50505050505050505050565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610942575060095473ffffffffffffffffffffffffffffffffffffffff1633145b6109ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f5043546f6b656e3a204e6f7420616c6c6f77656420736574205472616e73666560448201527f7257686974656c6973742e000000000000000000000000000000000000000000606482015260840161061d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b610a25610e66565b6009805491151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b6009546040517f957aaea800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152600092169063957aaea890602401602060405180830381865afa158015610ae0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b049190611e6b565b610b435773ffffffffffffffffffffffffffffffffffffffff8084166000908152600160209081526040808320938616835292905220545b905061049b565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92915050565b610b73610e66565b73ffffffffffffffffffffffffffffffffffffffff8116610bc3576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b61063f81610ff4565b610630838383600161119d565b6000610be58484610a6f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c7d5781811015610c6e576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602481018290526044810183905260640161061d565b610c7d8484848403600061119d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd3576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b73ffffffffffffffffffffffffffffffffffffffff8216610d23576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b6106308383836112e5565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148015610d9457507f000000000000000000000000000000000000000000000000000000000000000046145b15610dbe57507f000000000000000000000000000000000000000000000000000000000000000090565b6104cf604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60055473ffffffffffffffffffffffffffffffffffffffff6101009091041633146104e4576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161061d565b610ec76115c3565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8216610f8c576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b610669600083836112e5565b73ffffffffffffffffffffffffffffffffffffffff8216610fe8576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b610669826000836112e5565b6005805473ffffffffffffffffffffffffffffffffffffffff8381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff85161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61107a6115ff565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f123390565b60606104cf7f0000000000000000000000000000000000000000000000000000000000000000600661163c565b60606104cf7f0000000000000000000000000000000000000000000000000000000000000000600761163c565b600061049b611134610d2e565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b600080600080611181888888886116e0565b92509250925061119182826117da565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166111ed576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b73ffffffffffffffffffffffffffffffffffffffff831661123d576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161061d565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602090815260408083209387168352929052208290558015610c7d578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516112d791815260200190565b60405180910390a350505050565b6009548390839074010000000000000000000000000000000000000000900460ff166115b15773ffffffffffffffffffffffffffffffffffffffff82166000908152600a602052604090205460ff1680611364575073ffffffffffffffffffffffffffffffffffffffff81166000908152600a602052604090205460ff165b806114175750600954604080517f1d4632ac000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff808616931691631d4632ac9160048083019260209291908290030181865afa1580156113db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ff9190611e4e565b73ffffffffffffffffffffffffffffffffffffffff16145b806114b157506009546040517f957aaea800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301529091169063957aaea890602401602060405180830381865afa15801561148d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b19190611e6b565b8061154b57506009546040517f957aaea800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063957aaea890602401602060405180830381865afa158015611527573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154b9190611e6b565b6115b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5043546f6b656e3a204e6f7420616c6c6f776564207472616e736665722e0000604482015260640161061d565b6115bc8585856118de565b5050505050565b60055460ff166104e4576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055460ff16156104e4576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606060ff831461164f57610b3c836118f1565b81805461165b90611dfb565b80601f016020809104026020016040519081016040528092919081815260200182805461168790611dfb565b80156116d45780601f106116a9576101008083540402835291602001916116d4565b820191906000526020600020905b8154815290600101906020018083116116b757829003601f168201915b5050505050905061049b565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561171b57506000915060039050826117d0565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561176f573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166117c6575060009250600191508290506117d0565b9250600091508190505b9450945094915050565b60008260038111156117ee576117ee611e88565b036117f7575050565b600182600381111561180b5761180b611e88565b03611842576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600282600381111561185657611856611e88565b03611890576040517ffce698f70000000000000000000000000000000000000000000000000000000081526004810182905260240161061d565b60038260038111156118a4576118a4611e88565b03610669576040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810182905260240161061d565b6118e66115ff565b610630838383611930565b606060006118fe83611adb565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b73ffffffffffffffffffffffffffffffffffffffff831661196857806002600082825461195d9190611eb7565b90915550611a1a9050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156119ee576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602481018290526044810183905260640161061d565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff8216611a4357600280548290039055611a6f565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611ace91815260200190565b60405180910390a3505050565b600060ff8216601f81111561049b576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000815180845260005b81811015611b4257602081850181015186830182015201611b26565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611b936020830184611b1c565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461063f57600080fd5b60008060408385031215611bcf57600080fd5b8235611bda81611b9a565b946020939093013593505050565b600080600060608486031215611bfd57600080fd5b8335611c0881611b9a565b92506020840135611c1881611b9a565b929592945050506040919091013590565b600060208284031215611c3b57600080fd5b5035919050565b600060208284031215611c5457600080fd5b8135611b9381611b9a565b7fff000000000000000000000000000000000000000000000000000000000000008816815260e060208201526000611c9a60e0830189611b1c565b8281036040840152611cac8189611b1c565b6060840188905273ffffffffffffffffffffffffffffffffffffffff8716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015611d0f578351835260209384019390920191600101611cf1565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215611d3b57600080fd5b8735611d4681611b9a565b96506020880135611d5681611b9a565b95506040880135945060608801359350608088013560ff81168114611d7a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b801515811461063f57600080fd5b600060208284031215611db757600080fd5b8135611b9381611d97565b60008060408385031215611dd557600080fd5b8235611de081611b9a565b91506020830135611df081611b9a565b809150509250929050565b600181811c90821680611e0f57607f821691505b602082108103611e48577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215611e6057600080fd5b8151611b9381611b9a565b600060208284031215611e7d57600080fd5b8151611b9381611d97565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8082018082111561049b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122072eae0e893d5184a8429ed1c5f4e2f963e2ef7465c2cf10e708195a7a402a27b64736f6c634300081a0033";

type PCTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PCTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PCToken__factory extends ContractFactory {
  constructor(...args: PCTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PCToken> {
    return super.deploy(_factory, overrides || {}) as Promise<PCToken>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  override attach(address: string): PCToken {
    return super.attach(address) as PCToken;
  }
  override connect(signer: Signer): PCToken__factory {
    return super.connect(signer) as PCToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PCTokenInterface {
    return new utils.Interface(_abi) as PCTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCToken {
    return new Contract(address, _abi, signerOrProvider) as PCToken;
  }
}
