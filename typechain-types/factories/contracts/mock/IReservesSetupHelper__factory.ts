/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReservesSetupHelper,
  IReservesSetupHelperInterface,
} from "../../../contracts/mock/IReservesSetupHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "configurator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "baseLTV",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationBonus",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "stableBorrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "flashLoanEnabled",
            type: "bool",
          },
        ],
        internalType: "struct IReservesSetupHelper.ConfigureReserveInput[]",
        name: "inputParams",
        type: "tuple[]",
      },
    ],
    name: "configureReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IReservesSetupHelper__factory {
  static readonly abi = _abi;
  static createInterface(): IReservesSetupHelperInterface {
    return new utils.Interface(_abi) as IReservesSetupHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReservesSetupHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IReservesSetupHelper;
  }
}
