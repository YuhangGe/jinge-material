import './index.scss';

import {
  Component,
  attrs as wrapAttrs,
  isObject,
  isNumber,
  setImmediate
} from 'jinge';
import {
  SnackbarQueueManager
} from './queue';

import _tpl from './index.html';

const queueManager = new SnackbarQueueManager();

export class Snackbar extends Component {
  static get template() {
    return _tpl;
  }

  static show(message, options) {
    if (isObject(message)) {
      options = message;
    } else {
      options = options || {};
      options.message = message;
    }
    const el = Snackbar.create(wrapAttrs(Object.assign({
      __portalDisabled: true,
      active: false
    }, options || {})));
    if (options.onClose) {
      el.__on('closed', options.onClose);
    }
    el.__renderToDOM(document.body, false);
    setImmediate(() => {
      el.active = true;
    });
  }

  constructor(attrs) {
    super(attrs);
    this.position = attrs.position || 'center';
    this.active = attrs.active;
    this.duration = isNumber(attrs.duration) ? attrs.duration : 4000;
    this.message = attrs.message || '';
    this.isShown = false;
    this.__portalDisabled = attrs.__portalDisabled;
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    if (v) {
      queueManager.add(this);
    } else {
      queueManager.remove(this);
    }
  }

  open() {
    if (this.active) return;
    this.active = true;
  }

  close() {
    if (!this.active) return;
    this.active = false;
  }

  _onOpen() {
    this.isShown = true;
    this.__notify('update.active', true);
    this.__notify('opened');
  }

  _onClose() {
    this.isShown = false;
    this.__notify('update.active', false);
    this.__notify('closed');
  }
}
