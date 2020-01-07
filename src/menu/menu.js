import './menu.scss';

import {
  Component,
  isUndefined,
  isString
} from 'jinge';
import {
  EnumAttrValidator,
  mergePopperOpts
} from '../_util';

import _tpl from './menu.html';

const sizeValidator = new EnumAttrValidator(
  '<md-menu>', 'size', [
    'auto', 'small', 'medium', 'big', 'huge'
  ]
);

export const MENU_PROVIDER = Symbol('menu_provider');

export class Menu extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    sizeValidator.assert(attrs);

    super(attrs);

    this.contentStyles = null;
    this.className = attrs.class;
    this.active = attrs.active;
    this.trigger = attrs.trigger || 'click';
    this.popperOffset = null;
    this.offset = attrs.offset;
    this.placement = attrs.placement || 'bottom-start';
    this.dense = attrs.dense;
    this.fullWidth = attrs.fullWidth;
    this.alignTrigger = attrs.alignTrigger;
    this.closeOnSelect = attrs.closeOnSelect !== false;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
    this.size = attrs.size || 'auto';
    this._popperOptions = mergePopperOpts({
      modifiers: {
        keepTogether: {
          enabled: true
        },
        flip: {
          enabled: false
        }
      }
    }, attrs._popperOptions);
    this.listClass = attrs.listClass;

    this._Menu = {
      close: this.close.bind(this)
    };
    this.__setContext(MENU_PROVIDER, this._Menu, true);
  }

  get placement() {
    return this._placement;
  }

  set placement(v) {
    if (this._placement === v) return;
    this._placement = v;
    this.__updateIfNeed(this.updateOffset);
  }

  get offset() {
    return this._offset;
  }

  set offset(v) {
    if (this._offset === v) return;
    this._offset = v;
    this.__updateIfNeed(this.updateOffset);
  }

  onUpdateActive(isActive) {
    this.active = isActive;
    this.__notify('update.active', isActive);
    this.__notify(isActive ? 'opened' : 'closed');
  }

  close() {
    if (!this.active || !this.closeOnSelect) return;
    this.active = !this.active;
    this.__notify('update.active', this.active, 'close');
    this.__notify('closed');
  }

  __afterRender() {
    this.updateOffset();
    this.updateWidth();
  }

  updateOffset() {
    if (!isUndefined(this.offset) && this.offset !== null) {
      if (this.popperOffset !== this.offset) {
        this.popperOffset = this.offset;
      }
      return;
    }
    const el = this.__firstDOM;
    const pl = this.placement;
    let offsetX = 0;
    let offsetY = 0;
    if (this.alignTrigger) {
      this.popperOffset = isString(this.alignTrigger) ? this.alignTrigger : '0, 0';
      return;
    }
    if (pl.startsWith('bottom') || pl.startsWith('top')) {
      offsetY = -(el.offsetHeight + 11);
      if (pl.endsWith('-start')) {
        offsetX = -8;
      } else if (pl.endsWith('-end')) {
        offsetX = 8;
      }
    } else {
      offsetY = -(el.offsetWidth + 8);
      if (pl.endsWith('-start')) {
        offsetX = -11;
      } else if (pl.endsWith('-end')) {
        offsetX = 11;
      }
    }
    this.popperOffset = `${offsetX}, ${offsetY}`;
  }

  updateWidth() {
    if (!this.fullWidth) {
      return;
    }
    const el = this.__firstDOM;
    if (!el) return;
    const w = el.offsetWidth;
    this.contentStyles = `width: ${w}px; max-width: ${w}px;`;
  }
}
