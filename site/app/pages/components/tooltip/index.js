import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import SimpleTooltip from './examples/simple';
import sourceSimpleTooltip from './examples/simple.js?example';

export class PageTooltip extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      simple: {
        component: SimpleTooltip,
        source: sourceSimpleTooltip
      }
    };
  }
}
