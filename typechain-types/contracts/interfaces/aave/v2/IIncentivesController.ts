/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IIncentivesControllerInterface extends utils.Interface {
  functions: {
    "DISTRIBUTION_END()": FunctionFragment;
    "EMISSION_MANAGER()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "REVISION()": FunctionFragment;
    "REWARD_TOKEN()": FunctionFragment;
    "assets(address)": FunctionFragment;
    "claimRewards(address[],uint256,address)": FunctionFragment;
    "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
    "configureAssets(address[],uint256[])": FunctionFragment;
    "getAssetData(address)": FunctionFragment;
    "getClaimer(address)": FunctionFragment;
    "getDistributionEnd()": FunctionFragment;
    "getRewardsBalance(address[],address)": FunctionFragment;
    "getRewardsVault()": FunctionFragment;
    "getUserAssetData(address,address)": FunctionFragment;
    "getUserUnclaimedRewards(address)": FunctionFragment;
    "handleAction(address,uint256,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "setClaimer(address,address)": FunctionFragment;
    "setDistributionEnd(uint256)": FunctionFragment;
    "setRewardsVault(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DISTRIBUTION_END"
      | "EMISSION_MANAGER"
      | "PRECISION"
      | "REVISION"
      | "REWARD_TOKEN"
      | "assets"
      | "claimRewards"
      | "claimRewardsOnBehalf"
      | "configureAssets"
      | "getAssetData"
      | "getClaimer"
      | "getDistributionEnd"
      | "getRewardsBalance"
      | "getRewardsVault"
      | "getUserAssetData"
      | "getUserUnclaimedRewards"
      | "handleAction"
      | "initialize"
      | "setClaimer"
      | "setDistributionEnd"
      | "setRewardsVault"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_END",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMISSION_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REWARD_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsOnBehalf",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "configureAssets",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDistributionEnd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsBalance",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAssetData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUnclaimedRewards",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimer",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistributionEnd",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsVault",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_END",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMISSION_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REWARD_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDistributionEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAssetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUnclaimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setClaimer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDistributionEnd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsVault",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IIncentivesController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIncentivesControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<[BigNumber]>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    PRECISION(overrides?: CallOverrides): Promise<[number]>;

    REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        emissionPerSecond: BigNumber;
        index: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    claimRewards(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimRewardsOnBehalf(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    configureAssets(
      assets: PromiseOrValue<string>[],
      emissionsPerSecond: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAssetData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDistributionEnd(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRewardsBalance(
      assets: PromiseOrValue<string>[],
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardsVault(overrides?: CallOverrides): Promise<[string]>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserUnclaimedRewards(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handleAction(
      user: PromiseOrValue<string>,
      totalSupply: PromiseOrValue<BigNumberish>,
      userBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setClaimer(
      user: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDistributionEnd(
      distributionEnd: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRewardsVault(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

  EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<number>;

  REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

  assets(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, number] & {
      emissionPerSecond: BigNumber;
      index: BigNumber;
      lastUpdateTimestamp: number;
    }
  >;

  claimRewards(
    assets: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimRewardsOnBehalf(
    assets: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  configureAssets(
    assets: PromiseOrValue<string>[],
    emissionsPerSecond: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAssetData(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getClaimer(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

  getRewardsBalance(
    assets: PromiseOrValue<string>[],
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardsVault(overrides?: CallOverrides): Promise<string>;

  getUserAssetData(
    user: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserUnclaimedRewards(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handleAction(
    user: PromiseOrValue<string>,
    totalSupply: PromiseOrValue<BigNumberish>,
    userBalance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    rewardsVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setClaimer(
    user: PromiseOrValue<string>,
    caller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDistributionEnd(
    distributionEnd: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRewardsVault(
    rewardsVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<number>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number] & {
        emissionPerSecond: BigNumber;
        index: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    claimRewards(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configureAssets(
      assets: PromiseOrValue<string>[],
      emissionsPerSecond: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAssetData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getClaimer(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsBalance(
      assets: PromiseOrValue<string>[],
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsVault(overrides?: CallOverrides): Promise<string>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      user: PromiseOrValue<string>,
      totalSupply: PromiseOrValue<BigNumberish>,
      userBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      rewardsVault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimer(
      user: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDistributionEnd(
      distributionEnd: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsVault(
      rewardsVault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<BigNumber>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    configureAssets(
      assets: PromiseOrValue<string>[],
      emissionsPerSecond: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAssetData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimer(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsBalance(
      assets: PromiseOrValue<string>[],
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardsVault(overrides?: CallOverrides): Promise<BigNumber>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUnclaimedRewards(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleAction(
      user: PromiseOrValue<string>,
      totalSupply: PromiseOrValue<BigNumberish>,
      userBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setClaimer(
      user: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDistributionEnd(
      distributionEnd: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRewardsVault(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMISSION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsOnBehalf(
      assets: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    configureAssets(
      assets: PromiseOrValue<string>[],
      emissionsPerSecond: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAssetData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimer(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDistributionEnd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      assets: PromiseOrValue<string>[],
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserAssetData(
      user: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUnclaimedRewards(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleAction(
      user: PromiseOrValue<string>,
      totalSupply: PromiseOrValue<BigNumberish>,
      userBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setClaimer(
      user: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDistributionEnd(
      distributionEnd: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsVault(
      rewardsVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
