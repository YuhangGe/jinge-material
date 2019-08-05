import {
  Component
} from 'jinge';
import _tpl from './index.html';
import apis from './api';

import Over from './examples/over';
import sourceOver from './examples/over?example';
import Push from './examples/push';
import sourcePush from './examples/push?example';

export class PageDrawer extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      over: {
        component: Over,
        source: sourceOver
      },
      push: {
        component: Push,
        source: sourcePush
      }
    };
  }
}