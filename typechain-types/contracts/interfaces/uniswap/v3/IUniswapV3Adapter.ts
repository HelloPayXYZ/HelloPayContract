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

export interface IUniswapV3AdapterInterface extends utils.Interface {
  functions: {
    "quoteExactInput(address,address,uint256)": FunctionFragment;
    "quoteExactInputWithPath(bytes,uint256)": FunctionFragment;
    "quoteExactOutput(address,address,uint256)": FunctionFragment;
    "quoteExactOutputWithPath(bytes,uint256)": FunctionFragment;
    "swapExactInput(address,address,uint256)": FunctionFragment;
    "swapExactInputWithPath(bytes,address,uint256)": FunctionFragment;
    "swapExactOutput(address,address,uint256)": FunctionFragment;
    "swapExactOutputWithPath(bytes,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "quoteExactInput"
      | "quoteExactInputWithPath"
      | "quoteExactOutput"
      | "quoteExactOutputWithPath"
      | "swapExactInput"
      | "swapExactInputWithPath"
      | "swapExactOutput"
      | "swapExactOutputWithPath"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputWithPath",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutput",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutputWithPath",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactInput",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactInputWithPath",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactOutput",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactOutputWithPath",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputWithPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutputWithPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInputWithPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactOutputWithPath",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IUniswapV3Adapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUniswapV3AdapterInterface;

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
    quoteExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    quoteExactInputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    quoteExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    quoteExactOutputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    swapExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactInputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactOutputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  quoteExactInput(
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactInputWithPath(
    path: PromiseOrValue<BytesLike>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactOutput(
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactOutputWithPath(
    path: PromiseOrValue<BytesLike>,
    amountOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapExactInput(
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactInputWithPath(
    _path: PromiseOrValue<BytesLike>,
    _tokenIn: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactOutput(
    _tokenIn: PromiseOrValue<string>,
    _tokenOut: PromiseOrValue<string>,
    _amountOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactOutputWithPath(
    _path: PromiseOrValue<BytesLike>,
    _tokenIn: PromiseOrValue<string>,
    _amountOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    quoteExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactInputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactOutputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    quoteExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactOutputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactInputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactOutputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    quoteExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactInputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactOutputWithPath(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactInput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactInputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactOutput(
      _tokenIn: PromiseOrValue<string>,
      _tokenOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactOutputWithPath(
      _path: PromiseOrValue<BytesLike>,
      _tokenIn: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
