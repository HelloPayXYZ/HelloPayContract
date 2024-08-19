/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILendingPoolAddressProvider,
  ILendingPoolAddressProviderInterface,
} from "../../../../../contracts/interfaces/aave/v2/ILendingPoolAddressProvider";

const _abi = [
  {
    inputs: [],
    name: "getLendingPool",
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
] as const;

export class ILendingPoolAddressProvider__factory {
  static readonly abi = _abi;
  static createInterface(): ILendingPoolAddressProviderInterface {
    return new utils.Interface(_abi) as ILendingPoolAddressProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendingPoolAddressProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILendingPoolAddressProvider;
  }
}
