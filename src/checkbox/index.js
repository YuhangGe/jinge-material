import './index.scss';

import {
  Component,
  NOTIFY,
  UPDATE_IF_NEED,
  ARG_COMPONENTS
} from 'jinge';

import {
  STR_DEFAULT,
  uid,
  isArray,
  arrayPushIfNotExist,
  arrayRemove,
  obj2class,
  isUndefined
} from 'jinge/util';

import _tpl from './index.html';

export class Checkbox extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs, name = 'checkbox') {
    if (isArray(attrs.value) && !('trueValue' in attrs)) {
      throw new Error(`<md-${name}>: attribute "trueValue" is required when "value" is array(which means array-mode ${name})`);
    }
    super(attrs);
    this._renderLabel = this[ARG_COMPONENTS] && this[ARG_COMPONENTS][STR_DEFAULT];
    this._isArrayMode = isArray(attrs.value);
    this.checked = null;
    this.classes = '';
    this.rippleActive = false;

    this.id = attrs.id || `md-${name}-${uid()}`;
    this.name = attrs.name || '';
    this.class = attrs.class || '';
    this.disabled = !!attrs.disabled;
    this.required = !!attrs.required;
    this.trueValue = attrs.trueValue;
    this.falseValue = attrs.falseValue;
    this.value = attrs.value;

    this._calcChecked();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(v) {
    if (this._disabled === v) return;
    this._disabled = v;
    this[UPDATE_IF_NEED](this._updateClasses);
  }

  get required() {
    return this._required;
  }

  set required(v) {
    if (this._required === v) return;
    this._required = v;
    this[UPDATE_IF_NEED](this._updateClasses);
  }

  get class() {
    return this._class;
  }

  set class(v) {
    if (this._class === v) return;
    this._class = v;
    this[UPDATE_IF_NEED](this._updateClasses);
  }

  get value() {
    return this._value;
  }

  set value(v) {
    const isArr = isArray(v);
    if (isArr !== this._isArrayMode) {
      throw new Error('<md-checkbox/>: attribute "value" can\'t change array mode.');
    }
    this._value = v;
    this[UPDATE_IF_NEED](this._calcChecked);
  }

  get trueValue() {
    return this._trueValue;
  }

  set trueValue(v) {
    this._trueValue = isUndefined(v) ? true : v;
    this[UPDATE_IF_NEED](this._calcChecked);
  }

  get falseValue() {
    return this._falseValue;
  }

  set falseValue(v) {
    this._falseValue = isUndefined(v) ? false : v;
    this[UPDATE_IF_NEED](this._calcChecked);
  }

  toggleCheck() {
    this._updateChecked(!this.checked);
  }

  _updateChecked(v) {
    if (this.checked === v) return;
    this.checked = v;
    this._updateClasses();
    if (this._isArrayMode) {
      if (this.checked) {
        arrayPushIfNotExist(this._value, this.trueValue);
      } else {
        arrayRemove(this._value, this.trueValue);
      }
    } else {
      this._value = this.checked ? this.trueValue : this.falseValue;
    }
    this.rippleActive = true;
    this[NOTIFY]('change', this._value);
  }

  _updateClasses() {
    this.classes = obj2class({
      'md-disabled': this.disabled,
      'md-required': this.required,
      'md-checked': this.checked
    }, this.class);
  }

  _calcChecked() {
    const nc = this._isArrayMode ? this.value.indexOf(this.trueValue) >= 0 : (this.value === this.trueValue);
    if (nc === this.checked) return;
    this.checked = nc;
    this._updateClasses();
  }
}