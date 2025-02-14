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
} from "../../common";

export declare namespace IReservesSetupHelper {
  export type ConfigureReserveInputStruct = {
    asset: PromiseOrValue<string>;
    baseLTV: PromiseOrValue<BigNumberish>;
    liquidationThreshold: PromiseOrValue<BigNumberish>;
    liquidationBonus: PromiseOrValue<BigNumberish>;
    reserveFactor: PromiseOrValue<BigNumberish>;
    borrowCap: PromiseOrValue<BigNumberish>;
    supplyCap: PromiseOrValue<BigNumberish>;
    stableBorrowingEnabled: PromiseOrValue<boolean>;
    borrowingEnabled: PromiseOrValue<boolean>;
    flashLoanEnabled: PromiseOrValue<boolean>;
  };

  export type ConfigureReserveInputStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    boolean
  ] & {
    asset: string;
    baseLTV: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationBonus: BigNumber;
    reserveFactor: BigNumber;
    borrowCap: BigNumber;
    supplyCap: BigNumber;
    stableBorrowingEnabled: boolean;
    borrowingEnabled: boolean;
    flashLoanEnabled: boolean;
  };
}

export interface IReservesSetupHelperInterface extends utils.Interface {
  functions: {
    "configureReserves(address,(address,uint256,uint256,uint256,uint256,uint256,uint256,bool,bool,bool)[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "configureReserves"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "configureReserves",
    values: [
      PromiseOrValue<string>,
      IReservesSetupHelper.ConfigureReserveInputStruct[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "configureReserves",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IReservesSetupHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IReservesSetupHelperInterface;

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
    configureReserves(
      configurator: PromiseOrValue<string>,
      inputParams: IReservesSetupHelper.ConfigureReserveInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  configureReserves(
    configurator: PromiseOrValue<string>,
    inputParams: IReservesSetupHelper.ConfigureReserveInputStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    configureReserves(
      configurator: PromiseOrValue<string>,
      inputParams: IReservesSetupHelper.ConfigureReserveInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    configureReserves(
      configurator: PromiseOrValue<string>,
      inputParams: IReservesSetupHelper.ConfigureReserveInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    configureReserves(
      configurator: PromiseOrValue<string>,
      inputParams: IReservesSetupHelper.ConfigureReserveInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
