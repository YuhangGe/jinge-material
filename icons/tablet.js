import {
  Icon
} from '../src/icon';

const __svg_IconBaselineTablet = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/></svg>`;

export class IconBaselineTablet extends Icon {
  get svg() {
    return __svg_IconBaselineTablet;
  }
}

export class IconOutlinedTablet extends Icon {
  get svg() {
    return __svg_IconBaselineTablet;
  }
}

export class IconRoundTablet extends Icon {
  get svg() {
    return __svg_IconBaselineTablet;
  }
}

export class IconSharpTablet extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z"/></svg>`;
  }
}

export class IconTwotoneTablet extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 6h14v12H5z" opacity=".3"/><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/></svg>`;
  }
}