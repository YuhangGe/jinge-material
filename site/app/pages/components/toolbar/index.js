import {
  Component,
  I18N_WATCH
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import RegularToolbar from './examples/regular';
import sourceRegularToolbar from './examples/regular.js?example';
import SizeToolbar from './examples/size';
import sourceSizeToolbar from './examples/size.js?example';
import ContentToolbar from './examples/content';
import sourceContentToolbar from './examples/content.js?example';

export class PageToolbar extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      regularToolbar: {
        component: RegularToolbar,
        source: sourceRegularToolbar
      },
      toolbarSizes: {
        component: SizeToolbar,
        source: sourceSizeToolbar
      },
      contentActions: {
        component: ContentToolbar,
        source: sourceContentToolbar
      }
    };
  }
}
