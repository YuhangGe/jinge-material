import {
  Component,
  attrs as wrapAttrs,
  setImmediate,
  isFunction,
  isObject,
  isString
} from 'jinge';
import {
  getAndWatchLocale
} from '../_config';

import _tpl from './dialog-confirm.html';

export class DialogConfirm extends Component {
  static get template() {
    return _tpl;
  }

  /**
   *
   * @param {Object} opts
   * @param {Function} confirmCallback
   * @param {Function} cancelCallback
   *
   * DialogConfirm.show 可以通过第二个和第三个参数传递 Confirm 和 Cancel 回调函数。
   *
   * 在实际业务使用时，有一种常见情况是，在 confirm 回调中要调用服务器的
   * api 接口更新，api 请求成功后，才关闭 DialogConfirm 对话框（如果失败，则
   * 允许用户重试），api 请求过程中 Confirm 按钮不能点击且有 spinner 状态。
   *
   * 针对这种情况，confirmCallback 允许返回 `false` 来阻止对话框关闭，还允许直接
   * 返回一个 Promise 对象。对话框会等待该 Promise，直到其 resolve 返回的数据
   * 不是 `false` 才关闭对话框。
   */
  static show(opts, confirmCallback, cancelCallback) {
    return showConfirmOrPrompt(DialogConfirm, opts, confirmCallback, cancelCallback);
  }

  constructor(attrs) {
    super(attrs);
    this.active = attrs.active;
    this.title = attrs.title;
    this.content = attrs.content;
    this.confirmSpinner = attrs.confirmSpinner;
    this.confirmText = attrs.confirmText;
    this.cancelText = attrs.cancelText;

    this._localeChangeHandler = this._onLocaleChange.bind(this);
    this.locale = getAndWatchLocale(this._localeChangeHandler);
  }

  _onLocaleChange(locale) {
    this.locale = locale;
  }

  passActive(active) {
    this.__notify('update.active', active);
  }

  onCancel() {
    this.__notify('cancel');
  }

  onConfirm() {
    this.__notify('confirm');
  }
}

export function showConfirmOrPrompt(Clazz, opts, confirmCallback, cancelCallback) {
  const isConfirm = Clazz === DialogConfirm;
  if (isString(opts)) {
    opts = {
      title: opts
    };
  }
  const attrs = {
    __portalDisabled: true,
    active: false,
    title: opts.title,
    content: opts.content,
    confirmSpinner: false,
    confirmText: opts.confirmText,
    cancelText: opts.cancelText
  };
  if (!isConfirm) {
    attrs.errorTip = opts.errorTip;
    attrs.cancelable = opts.cancelable;
    attrs.inputPlaceholder = opts.inputPlaceholder;
    attrs.inputRequired = opts.inputRequired;
    attrs.inputMaxlength = opts.inputMaxlength;
    attrs.defaultValue = opts.defaultValue;
  }
  const el = Clazz.create(wrapAttrs(attrs));
  setImmediate(() => {
    el.active = true;
  });
  el.__on('update.active', (active, action) => {
    if (active) return;
    if (isFunction(cancelCallback) && cancelCallback() === false) {
      return;
    }
    el.__destroy();
  });
  el.__on('cancel', () => {
    if (isFunction(cancelCallback) && cancelCallback() === false) {
      return;
    }
    el.__destroy();
  });
  el.__on('confirm', () => {
    if (!isFunction(confirmCallback)) {
      return el.__destroy();
    }
    const result = confirmCallback(isConfirm ? null : el.inputValue);
    const isPromise = isObject(result) && isFunction(result.then);
    const err = isString(result) ? result : (
      isObject(result) && !isPromise ? result.message || result.toString() : null
    );
    if (result === false || err) {
      if (!isConfirm) {
        el.errorTip = err;
      }
      return;
    } else if (isPromise) {
      el.confirmSpinner = true;
      result.then(rr => {
        const rrerr = isString(rr) ? rr : (
          isObject(rr) ? rr.message || rr.toString() : null
        );
        if (rr === false || rrerr) {
          if (!isConfirm) {
            el.errorTip = rrerr;
          }
          el.confirmSpinner = false;
        } else {
          el.__destroy();
        }
      }, err => {
        el.confirmSpinner = false;
        if (!isConfirm) {
          el.errorTip = err.message || err.toString();
        }
      });
      return;
    }
    el.__destroy();
  });
  el.__renderToDOM(document.body, false);
  return el;
}
