/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOrderMixin,
  IOrderMixinInterface,
} from "../../../../contracts/external/AggregationRouterV5.sol/IOrderMixin";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancelOrder",
    outputs: [
      {
        internalType: "uint256",
        name: "orderRemaining",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "checkPredicate",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "interaction",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "makingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skipPermitAndThresholdAmount",
        type: "uint256",
      },
    ],
    name: "fillOrder",
    outputs: [
      {
        internalType: "uint256",
        name: "actualMakingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualTakingAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order_",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "interaction",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "makingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skipPermitAndThresholdAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "fillOrderTo",
    outputs: [
      {
        internalType: "uint256",
        name: "actualMakingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualTakingAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "interaction",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "makingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skipPermitAndThresholdAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "permit",
        type: "bytes",
      },
    ],
    name: "fillOrderToWithPermit",
    outputs: [
      {
        internalType: "uint256",
        name: "actualMakingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualTakingAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "makerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "takerAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "maker",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "allowedSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "offsets",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "interactions",
            type: "bytes",
          },
        ],
        internalType: "struct OrderLib.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "hashOrder",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "remaining",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "remainingRaw",
    outputs: [
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "orderHashes",
        type: "bytes32[]",
      },
    ],
    name: "remainingsRaw",
    outputs: [
      {
        internalType: "uint256[]",
        name: "rawAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "simulate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOrderMixin__factory {
  static readonly abi = _abi;
  static createInterface(): IOrderMixinInterface {
    return new utils.Interface(_abi) as IOrderMixinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOrderMixin {
    return new Contract(address, _abi, signerOrProvider) as IOrderMixin;
  }
}
