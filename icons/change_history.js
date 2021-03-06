import {
  Icon
} from '../src/icon';

const __svg_IconBaselineChangeHistory = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/></svg>`;

export class IconBaselineChangeHistory extends Icon {
  get svg() {
    return __svg_IconBaselineChangeHistory;
  }
}

export class IconOutlinedChangeHistory extends Icon {
  get svg() {
    return __svg_IconBaselineChangeHistory;
  }
}

export class IconRoundChangeHistory extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7.77L18.39 18H5.61L12 7.77m-.85-2.41l-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4c.79 0 1.26-.86.85-1.53l-8.2-13.11c-.39-.63-1.31-.63-1.7 0z"/></svg>`;
  }
}

export class IconSharpChangeHistory extends Icon {
  get svg() {
    return __svg_IconBaselineChangeHistory;
  }
}

export class IconTwotoneChangeHistory extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7.77L5.61 18h12.78z" opacity=".3"/><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"/></svg>`;
  }
}