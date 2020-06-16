export interface SnackbarOptions {
  /**
   * 提示出现在底部的位置，默认为中间 'center'，可以指定为 'left'
   */
  position?: 'left' | 'center';
  /**
   * 提示出现多少时长（毫秒）后消失，默认为 4000。设置为 0 则不消失。
   */
  duration?: number;
  /**
   * 提示关闭时的回调函数。
   */
  onClose?: () => void;
}
export declare class Snackbar {
  static show(message: string, options?: SnackbarOptions): Snackbar;
  close(): void;
}