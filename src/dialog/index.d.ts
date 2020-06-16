export interface AlertOptions {
  title: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
}

export declare class DialogAlert {
  static show(title: string, closeCallback?: () => void): void;
  static show(options: AlertOptions, closeCallback?: () => void): void;
}

/**
 * 在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的
 * api 接口更新，api 请求成功后，才关闭 DialogPrompt 对话框（如果失败，则
 * 允许用户重试），api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。
 *
 * 针对这种情况，confirmCallback 允许返回 `false` 来阻止对话框关闭；
 * 或者返回一个字符串来阻止对话框关闭的同时展示错误信息；
 * 还允许直接返回一个 Promise 对象，对话框会等待该 Promise，直到其 resolve 返回的数据
 * 不是 `false` 或字符串才关闭对话框。
 *
 * 如果需要关闭对话框，只要直接 return 或 resolve() 即可（会返回 undefined）。
 */
type ConfirmCallback = () => void | boolean | string | Promise<void | boolean | string>;
type CancelCallback = () => void | boolean;

export interface ConfirmOptions extends AlertOptions {

}

export declare class DialogConfirm {
  /**
   * @param title 
   * @param confirmCallback
   * @param cancelCallback 
   */
  static show(title: string, confirmCallback?: ConfirmCallback, cancelCallback?: CancelCallback): void;
  /**
   * @param options {title: string; content?: string;}
   * @param confirmCallback 
   * @param cancelCallback 
   */
  static show(options: ConfirmOptions, confirmCallback?: ConfirmCallback, cancelCallback?: CancelCallback): void;
}

type PromptConfirmCallback = (value: string) => void | boolean | string | Promise<void | boolean | string>;

export interface PromptOptions extends AlertOptions {
  cancelable?: boolean;
  inputPlaceholder?: string;
  inputRequired?: boolean;
  inputMaxlength?: number;
  defaultValue?: string | number;
}
export declare class DialogPrompt {
  /**
   * @param title 
   * @param confirmCallback 
   * @param cancelCallback 
   */
  static show(title: string, confirmCallback?: PromptConfirmCallback, cancelCallback?: CancelCallback): void;
  /**
   *
   * @param opts {title: string; content?: string;}
   * @param confirmCallback
   * @param cancelCallback
   */
  static show(options: PromptOptions, confirmCallback?: PromptConfirmCallback, cancelCallback?: CancelCallback): void;
}