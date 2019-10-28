import {
  Component,
  VM
} from 'jinge';

import _tpl from './row-class.html';

const data = VM([{
  name: 'jinge',
  version: 1,
  author: 'YuhangGe'
}, {
  name: 'vue',
  version: 3,
  author: 'vuejs'
}, {
  name: 'react',
  version: 16,
  author: 'facebook'
}, {
  name: 'angular',
  version: 7,
  author: 'google'
}]);

export default class ExampleTableBasic extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div /deep/ tr.highlight {
  background: #e3f2fd; 
}`;
  }

  constructor(attrs) {
    super(attrs);

    this.data = data;
  }

  getRowClass(row) {
    return row.name === 'jinge' ? 'highlight' : null;
  }
}
