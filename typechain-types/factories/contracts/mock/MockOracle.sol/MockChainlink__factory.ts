/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockChainlink,
  MockChainlinkInterface,
} from "../../../../contracts/mock/MockOracle.sol/MockChainlink";

const _abi = [
  {
    inputs: [],
    name: "fetchPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052642540be400060005534801561001957600080fd5b50610150806100296000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630fdb11cf1461004657806391b7f5ed14610061578063feaf968c14610076575b600080fd5b61004e6100a5565b6040519081526020015b60405180910390f35b61007461006f3660046100bd565b600055565b005b60008054604080518381526020810192909252810182905260608101829052608081019190915260a001610058565b600080546100b8906402540be4006100d6565b905090565b6000602082840312156100cf57600080fd5b5035919050565b8082028115828204841417610114577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220707f4542f30c990d25510ec7ca634cd077820a146a51deb35dbcd96ed21fcbcb64736f6c63430008160033";

type MockChainlinkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockChainlinkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockChainlink__factory extends ContractFactory {
  constructor(...args: MockChainlinkConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockChainlink> {
    return super.deploy(overrides || {}) as Promise<MockChainlink>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockChainlink {
    return super.attach(address) as MockChainlink;
  }
  override connect(signer: Signer): MockChainlink__factory {
    return super.connect(signer) as MockChainlink__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockChainlinkInterface {
    return new utils.Interface(_abi) as MockChainlinkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChainlink {
    return new Contract(address, _abi, signerOrProvider) as MockChainlink;
  }
}
