/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPermissionController,
  IPermissionControllerInterface,
} from "../../../contracts/interfaces/IPermissionController";

const _abi = [
  {
    inputs: [],
    name: "pause",
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

export class IPermissionController__factory {
  static readonly abi = _abi;
  static createInterface(): IPermissionControllerInterface {
    return new utils.Interface(_abi) as IPermissionControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPermissionController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPermissionController;
  }
}
