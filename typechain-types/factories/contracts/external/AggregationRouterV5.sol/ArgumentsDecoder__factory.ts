/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ArgumentsDecoder,
  ArgumentsDecoderInterface,
} from "../../../../contracts/external/AggregationRouterV5.sol/ArgumentsDecoder";

const _abi = [
  {
    inputs: [],
    name: "IncorrectDataLength",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201a5538866a2668ef9181f37d14292998dc17dbbfecb1e31f1d281b5f3f77a8b664736f6c63430008160033";

type ArgumentsDecoderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArgumentsDecoderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArgumentsDecoder__factory extends ContractFactory {
  constructor(...args: ArgumentsDecoderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArgumentsDecoder> {
    return super.deploy(overrides || {}) as Promise<ArgumentsDecoder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ArgumentsDecoder {
    return super.attach(address) as ArgumentsDecoder;
  }
  override connect(signer: Signer): ArgumentsDecoder__factory {
    return super.connect(signer) as ArgumentsDecoder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArgumentsDecoderInterface {
    return new utils.Interface(_abi) as ArgumentsDecoderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArgumentsDecoder {
    return new Contract(address, _abi, signerOrProvider) as ArgumentsDecoder;
  }
}
