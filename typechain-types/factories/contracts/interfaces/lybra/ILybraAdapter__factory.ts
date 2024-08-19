/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILybraAdapter,
  ILybraAdapterInterface,
} from "../../../../contracts/interfaces/lybra/ILybraAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "depositAllAndMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "depositAndMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAssetPrice",
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
    inputs: [
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtToken",
        type: "address",
      },
    ],
    name: "getGlobalInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "supplyRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getPositionInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCollateralBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDebtBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDebtAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableBorrowsBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paybackAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
    ],
    name: "quotePeUSDToWstETH",
    outputs: [
      {
        internalType: "uint256",
        name: "exactInputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exactOutputAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
    ],
    name: "quoteUSDCToPeUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "exactInputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exactOutputAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
    ],
    name: "quoteWstETHToPeUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "exactInputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exactOutputAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
    ],
    name: "quoteWstETHToUSDC",
    outputs: [
      {
        internalType: "uint256",
        name: "exactInputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exactOutputAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "peUSDAmount",
        type: "uint256",
      },
    ],
    name: "swapPeUSDToWstETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wstETHAmount",
        type: "uint256",
      },
    ],
    name: "swapUSDCToPeUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wstETHAmount",
        type: "uint256",
      },
    ],
    name: "swapWstETHToUSDC",
    outputs: [
      {
        internalType: "uint256",
        name: "usdcReceiveAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILybraAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): ILybraAdapterInterface {
    return new utils.Interface(_abi) as ILybraAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILybraAdapter {
    return new Contract(address, _abi, signerOrProvider) as ILybraAdapter;
  }
}
