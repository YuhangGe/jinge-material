import {
  Component,
  I18N_WATCH
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Regular from './examples/regular';
import sourceRegular from './examples/regular?example';
import Static from './examples/static';
import sourceStatic from './examples/static?example';

export class PageSnackbar extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      regular: {
        component: Regular,
        source: sourceRegular
      },
      static: {
        component: Static,
        source: sourceStatic
      }
    };
  }
}
