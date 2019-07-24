import './button.scss';

import {
  Component,
  VM,
  AFTER_RENDER,
  BEFORE_DESTROY,
  LISTENERS,
  NOTIFY,
  GET_FIRST_DOM
} from 'jinge';
import {
  addEvent,
  removeEvent
} from 'jinge/dom';
import {
  registerFocus,
  deregisterFocus
} from '../_util';

import _tpl from './button.html';

const IGEVTS = ['touchstart', 'touchmove', 'mousedown'];

export class Button extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this._tag = attrs.to ? 'sref' : (
      attrs.href ? 'a' : 'button'
    );
    this.to = attrs.to || '';
    this.target = attrs.target || '_self';
    this.href = attrs.href || '';

    this.type = attrs.type || 'button';
    this.style = attrs.style;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
    this.ripple = attrs.ripple !== false;
    this.rippleActive = false;
    this.hasFocus = false;
    this._eHandlers = null;
  }
  [AFTER_RENDER]() {
    registerFocus(this);
    const lis = this[LISTENERS];
    if (!lis) return;
    const el = this[GET_FIRST_DOM]();
    lis.forEach((handlers, eventName) => {
      if (IGEVTS.indexOf(eventName) >= 0) return;
      handlers.forEach(fn => {
        const tag = fn.tag || false;
        let handler = fn;
        if (tag && (tag.stop || tag.prevent)) {
          handler = function($evt) {
            fn($evt);
            tag.stop && $evt.stopPropagation();
            tag.prevent && $evt.preventDefault();
          };
        }
        addEvent(el, eventName, handler, tag);
        if (!this._eHandlers) this._eHandlers = [];
        this._eHandlers.push([eventName, handler]);
      });
    });
  }
  [BEFORE_DESTROY]() {
    deregisterFocus(this);
    if (this._eHandlers) {
      const el = this[GET_FIRST_DOM]();
      this._eHandlers.forEach(saved => {
        removeEvent(el, saved[0], saved[1]);
      });
      this._eHandlers.length = 0;
    }
  }
  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('touchstart', event);
  }
  touchmove(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('touchmove', event);
  }
  mousedown(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('mousedown', event);
  }
}

