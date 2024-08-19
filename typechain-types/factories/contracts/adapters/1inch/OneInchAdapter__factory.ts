/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OneInchAdapter,
  OneInchAdapterInterface,
} from "../../../../contracts/adapters/1inch/OneInchAdapter";

const _abi = [
  {
    inputs: [],
    name: "oneInchRouter",
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
    inputs: [
      {
        internalType: "bytes",
        name: "callArgs",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountMATIC",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
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
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610386806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063ac3af2081461003b578063af2b4aba14610080575b600080fd5b610056731111111254fb6c44bac0bed2854e76f90643097d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61009361008e3660046101c8565b6100a8565b60408051928352602083019190915201610077565b600080600080731111111254fb6c44bac0bed2854e76f90643097d73ffffffffffffffffffffffffffffffffffffffff1685876040516100e891906102bf565b60006040518083038185875af1925050503d8060008114610125576040519150601f19603f3d011682016040523d82523d6000602084013e61012a565b606091505b5091509150818190610172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016991906102db565b60405180910390fd5b506000808280602001905181019061018a919061032c565b90999098509650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156101db57600080fd5b823567ffffffffffffffff808211156101f357600080fd5b818501915085601f83011261020757600080fd5b81358181111561021957610219610199565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561025f5761025f610199565b8160405282815288602084870101111561027857600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b60005b838110156102b657818101518382015260200161029e565b50506000910152565b600082516102d181846020870161029b565b9190910192915050565b60208152600082518060208401526102fa81604085016020870161029b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806040838503121561033f57600080fd5b50508051602090910151909290915056fea264697066735822122019a4911505525da1f871911018602b25bcbcf450fd423c135d214566f8c818f864736f6c63430008160033";

type OneInchAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OneInchAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OneInchAdapter__factory extends ContractFactory {
  constructor(...args: OneInchAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OneInchAdapter> {
    return super.deploy(overrides || {}) as Promise<OneInchAdapter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OneInchAdapter {
    return super.attach(address) as OneInchAdapter;
  }
  override connect(signer: Signer): OneInchAdapter__factory {
    return super.connect(signer) as OneInchAdapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OneInchAdapterInterface {
    return new utils.Interface(_abi) as OneInchAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneInchAdapter {
    return new Contract(address, _abi, signerOrProvider) as OneInchAdapter;
  }
}
