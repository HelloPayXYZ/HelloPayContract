/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUiIncentiveDataProvider,
  IUiIncentiveDataProviderInterface,
} from "../../../../../contracts/interfaces/aave/v3/IUiIncentiveDataProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getFullReservesIncentiveData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProvider.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProvider.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProvider.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProvider.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProvider.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProvider.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProvider.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUiIncentiveDataProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IUiIncentiveDataProviderInterface {
    return new utils.Interface(_abi) as IUiIncentiveDataProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUiIncentiveDataProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUiIncentiveDataProvider;
  }
}
