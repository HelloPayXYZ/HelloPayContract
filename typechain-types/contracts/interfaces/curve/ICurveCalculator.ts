/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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
} from "../../../common";

export interface ICurveCalculatorInterface extends utils.Interface {
  functions: {
    "get_dx(address,int128,int128,uint256,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "get_dx"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "get_dx",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "get_dx", data: BytesLike): Result;

  events: {};
}

export interface ICurveCalculator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICurveCalculatorInterface;

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
    get_dx(
      pool: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dy: PromiseOrValue<BigNumberish>,
      n_coins: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { dx: BigNumber }>;
  };

  get_dx(
    pool: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    dy: PromiseOrValue<BigNumberish>,
    n_coins: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    get_dx(
      pool: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dy: PromiseOrValue<BigNumberish>,
      n_coins: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    get_dx(
      pool: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dy: PromiseOrValue<BigNumberish>,
      n_coins: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    get_dx(
      pool: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dy: PromiseOrValue<BigNumberish>,
      n_coins: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
