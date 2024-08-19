/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  EthReceiver,
  EthReceiverInterface,
} from "../../../../contracts/external/AggregationRouterV5.sol/EthReceiver";

const _abi = [
  {
    inputs: [],
    name: "EthDepositRejected",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class EthReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): EthReceiverInterface {
    return new utils.Interface(_abi) as EthReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthReceiver {
    return new Contract(address, _abi, signerOrProvider) as EthReceiver;
  }
}
