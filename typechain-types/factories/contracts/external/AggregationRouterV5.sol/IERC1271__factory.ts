/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1271,
  IERC1271Interface,
} from "../../../../contracts/external/AggregationRouterV5.sol/IERC1271";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1271__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1271Interface {
    return new utils.Interface(_abi) as IERC1271Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1271 {
    return new Contract(address, _abi, signerOrProvider) as IERC1271;
  }
}
