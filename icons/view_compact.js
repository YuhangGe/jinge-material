import {
  Icon
} from '../src/icon';

const __svg_IconBaselineViewCompact = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/></svg>`;

export class IconBaselineViewCompact extends Icon {
  get svg() {
    return __svg_IconBaselineViewCompact;
  }
}

export class IconOutlinedViewCompact extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z"/></svg>`;
  }
}

export class IconRoundViewCompact extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 19h4v-7H3v5c0 1.1.9 2 2 2zm5 0h10c1.1 0 2-.9 2-2v-5H10v7zM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/></svg>`;
  }
}

export class IconSharpViewCompact extends Icon {
  get svg() {
    return __svg_IconBaselineViewCompact;
  }
}

export class IconTwotoneViewCompact extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z" opacity=".3"/><path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z"/></svg>`;
  }
}