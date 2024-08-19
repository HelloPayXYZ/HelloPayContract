/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Clones,
  ClonesInterface,
} from "../../../../@openzeppelin/contracts/proxy/Clones";

const _abi = [
  {
    inputs: [],
    name: "ERC1167FailedCreateClone",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220faf6da1d93908f70ad8e814dff666a5627cc88bc8799a06ecf2768ed518b231d64736f6c63430008160033";

type ClonesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClonesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Clones__factory extends ContractFactory {
  constructor(...args: ClonesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Clones> {
    return super.deploy(overrides || {}) as Promise<Clones>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Clones {
    return super.attach(address) as Clones;
  }
  override connect(signer: Signer): Clones__factory {
    return super.connect(signer) as Clones__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClonesInterface {
    return new utils.Interface(_abi) as ClonesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Clones {
    return new Contract(address, _abi, signerOrProvider) as Clones;
  }
}
