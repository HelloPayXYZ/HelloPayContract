/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DLeverOracle,
  DLeverOracleInterface,
} from "../../../contracts/utils/DLeverOracle";

const _abi = [
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getPrice",
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
    name: "oracle",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "_priceIds",
        type: "bytes[]",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_prices",
        type: "uint256[]",
      },
    ],
    name: "setPriceTest",
    outputs: [],
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50338061003757604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b610040816100b3565b506003602052642e90edd0007f5874fb4b3af1e15d72908009a486fe2979adb9db9dbbe6f165c21845d7fa2aa55573374f6ea9249bd8a70a02b3395423978fafc75dee6000526429e8d608007fefbf4e95faa6b32703db3935895647566a2815e804780a4236d1210a37d727ce55610103565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610953806101126000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637dc0d1d01161005b5780637dc0d1d0146100e857806386e072981461012d5780638da5cb5b14610140578063f2fde38b1461015e57600080fd5b806341976e091461008257806349b4d079146100cb578063715018a6146100e0575b600080fd5b6100b86100903660046103f4565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b6100de6100d936600461052e565b610171565b005b6100de6101eb565b6001546101089073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c2565b6100de61013b3660046105e9565b6101ff565b60005473ffffffffffffffffffffffffffffffffffffffff16610108565b6100de61016c3660046103f4565b61029a565b60005b82518110156101e65781818151811061018f5761018f610731565b6020026020010151600360008584815181106101ad576101ad610731565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff16825281019190915260400160002055600101610174565b505050565b6101f3610303565b6101fd6000610356565b565b610207610303565b60005b82518110156101e65781818151811061022557610225610731565b60200260200101516002600085848151811061024357610243610731565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090816102919190610803565b5060010161020a565b6102a2610303565b73ffffffffffffffffffffffffffffffffffffffff81166102f7576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b61030081610356565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101fd576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016102ee565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103ef57600080fd5b919050565b60006020828403121561040657600080fd5b61040f826103cb565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561048c5761048c610416565b604052919050565b600067ffffffffffffffff8211156104ae576104ae610416565b5060051b60200190565b600082601f8301126104c957600080fd5b813560206104de6104d983610494565b610445565b8083825260208201915060208460051b87010193508684111561050057600080fd5b602086015b8481101561052357610516816103cb565b8352918301918301610505565b509695505050505050565b6000806040838503121561054157600080fd5b823567ffffffffffffffff8082111561055957600080fd5b610565868387016104b8565b935060209150818501358181111561057c57600080fd5b85019050601f8101861361058f57600080fd5b803561059d6104d982610494565b81815260059190911b820183019083810190888311156105bc57600080fd5b928401925b828410156105da578335825292840192908401906105c1565b80955050505050509250929050565b60008060408084860312156105fd57600080fd5b833567ffffffffffffffff8082111561061557600080fd5b610621878388016104b8565b945060209150818601358181111561063857600080fd5b8601601f808201891361064a57600080fd5b81356106586104d982610494565b81815260059190911b8301850190858101908b83111561067757600080fd5b8685015b8381101561071e578035878111156106935760008081fd5b8601603f81018e136106a55760008081fd5b88810135888111156106b9576106b9610416565b6106e88a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08984011601610445565b8181528f8c8385010111156106fd5760008081fd5b818c84018c83013760009181018b019190915284525091870191870161067b565b5080985050505050505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061077457607f821691505b6020821081036107ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f8211156101e6576000816000526020600020601f850160051c810160208610156107dc5750805b601f850160051c820191505b818110156107fb578281556001016107e8565b505050505050565b815167ffffffffffffffff81111561081d5761081d610416565b6108318161082b8454610760565b846107b3565b602080601f831160018114610884576000841561084e5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556107fb565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156108d1578886015182559484019460019091019084016108b2565b508582101561090d57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122005e84a98c27f0e609bc8bdc815694b5f1a52a20249335565ecd24e689c34a04264736f6c63430008160033";

type DLeverOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DLeverOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DLeverOracle__factory extends ContractFactory {
  constructor(...args: DLeverOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DLeverOracle> {
    return super.deploy(overrides || {}) as Promise<DLeverOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DLeverOracle {
    return super.attach(address) as DLeverOracle;
  }
  override connect(signer: Signer): DLeverOracle__factory {
    return super.connect(signer) as DLeverOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DLeverOracleInterface {
    return new utils.Interface(_abi) as DLeverOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DLeverOracle {
    return new Contract(address, _abi, signerOrProvider) as DLeverOracle;
  }
}
