import {
  Icon
} from '../src/icon';

const __svg_IconBaselineRemove = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>`;

export class IconBaselineRemove extends Icon {
  get svg() {
    return __svg_IconBaselineRemove;
  }
}

export class IconOutlinedRemove extends Icon {
  get svg() {
    return __svg_IconBaselineRemove;
  }
}

export class IconRoundRemove extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>`;
  }
}

export class IconSharpRemove extends Icon {
  get svg() {
    return __svg_IconBaselineRemove;
  }
}

export class IconTwotoneRemove extends Icon {
  get svg() {
    return __svg_IconBaselineRemove;
  }
}