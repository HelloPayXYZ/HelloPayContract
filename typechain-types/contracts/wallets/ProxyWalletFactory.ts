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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ProxyWalletFactoryInterface extends utils.Interface {
  functions: {
    "createAccount(address,uint256,uint256)": FunctionFragment;
    "getImplement()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxyAdmin()": FunctionFragment;
    "proxyWalletImplement()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNewWalletImplement(address)": FunctionFragment;
    "strategyManager()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userWallets(address,address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createAccount"
      | "getImplement"
      | "owner"
      | "proxyAdmin"
      | "proxyWalletImplement"
      | "renounceOwnership"
      | "setNewWalletImplement"
      | "strategyManager"
      | "transferOwnership"
      | "userWallets"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createAccount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplement",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxyAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyWalletImplement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNewWalletImplement",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userWallets",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxyAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxyWalletImplement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewWalletImplement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userWallets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "CreateWallet(address,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdateImplement(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateImplement"): EventFragment;
}

export interface CreateWalletEventObject {
  user: string;
  strategy: string;
  wallet: string;
}
export type CreateWalletEvent = TypedEvent<
  [string, string, string],
  CreateWalletEventObject
>;

export type CreateWalletEventFilter = TypedEventFilter<CreateWalletEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface UpdateImplementEventObject {
  oldProxyWalletImplement: string;
  newProxyWalletImplement: string;
}
export type UpdateImplementEvent = TypedEvent<
  [string, string],
  UpdateImplementEventObject
>;

export type UpdateImplementEventFilter = TypedEventFilter<UpdateImplementEvent>;

export interface ProxyWalletFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProxyWalletFactoryInterface;

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
    createAccount(
      _strategy: PromiseOrValue<string>,
      _depositWstETH: PromiseOrValue<BigNumberish>,
      _addLeverageWstETH: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getImplement(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxyAdmin(overrides?: CallOverrides): Promise<[string]>;

    proxyWalletImplement(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNewWalletImplement(
      _proxyWalletImplement: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    strategyManager(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userWallets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  createAccount(
    _strategy: PromiseOrValue<string>,
    _depositWstETH: PromiseOrValue<BigNumberish>,
    _addLeverageWstETH: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getImplement(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxyAdmin(overrides?: CallOverrides): Promise<string>;

  proxyWalletImplement(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNewWalletImplement(
    _proxyWalletImplement: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  strategyManager(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userWallets(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createAccount(
      _strategy: PromiseOrValue<string>,
      _depositWstETH: PromiseOrValue<BigNumberish>,
      _addLeverageWstETH: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getImplement(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxyAdmin(overrides?: CallOverrides): Promise<string>;

    proxyWalletImplement(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNewWalletImplement(
      _proxyWalletImplement: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    strategyManager(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    userWallets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "CreateWallet(address,address,address)"(
      user?: null,
      strategy?: null,
      wallet?: null
    ): CreateWalletEventFilter;
    CreateWallet(
      user?: null,
      strategy?: null,
      wallet?: null
    ): CreateWalletEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "UpdateImplement(address,address)"(
      oldProxyWalletImplement?: null,
      newProxyWalletImplement?: null
    ): UpdateImplementEventFilter;
    UpdateImplement(
      oldProxyWalletImplement?: null,
      newProxyWalletImplement?: null
    ): UpdateImplementEventFilter;
  };

  estimateGas: {
    createAccount(
      _strategy: PromiseOrValue<string>,
      _depositWstETH: PromiseOrValue<BigNumberish>,
      _addLeverageWstETH: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getImplement(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    proxyWalletImplement(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNewWalletImplement(
      _proxyWalletImplement: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    strategyManager(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userWallets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createAccount(
      _strategy: PromiseOrValue<string>,
      _depositWstETH: PromiseOrValue<BigNumberish>,
      _addLeverageWstETH: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getImplement(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyWalletImplement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNewWalletImplement(
      _proxyWalletImplement: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    strategyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userWallets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
