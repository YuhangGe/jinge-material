import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './apis';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';

export class PageElevation extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this._api = apis;
    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic
      }
    };
  }
}
