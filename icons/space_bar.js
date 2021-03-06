import {
  Icon
} from '../src/icon';

export class IconBaselineSpaceBar extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"/></svg>`;
  }
}

const __svg_IconOutlinedSpaceBar = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9h-2z"/></svg>`;

export class IconOutlinedSpaceBar extends Icon {
  get svg() {
    return __svg_IconOutlinedSpaceBar;
  }
}

export class IconRoundSpaceBar extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v3H6v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpSpaceBar extends Icon {
  get svg() {
    return __svg_IconOutlinedSpaceBar;
  }
}

export class IconTwotoneSpaceBar extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 13H6V9H4v6h16V9h-2z"/></svg>`;
  }
}