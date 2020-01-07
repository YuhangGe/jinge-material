import {
  Icon
} from '../src/icon';

const __svg_IconBaselineTurnedIn = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`;

export class IconBaselineTurnedIn extends Icon {
  get svg() {
    return __svg_IconBaselineTurnedIn;
  }
}

export class IconOutlinedTurnedIn extends Icon {
  get svg() {
    return __svg_IconBaselineTurnedIn;
  }
}

export class IconRoundTurnedIn extends Icon {
  get svg() {
    return __svg_IconBaselineTurnedIn;
  }
}

export class IconSharpTurnedIn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5v18l7-3 7 3V3z"/></svg>`;
  }
}

export class IconTwotoneTurnedIn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L7 17.97V5h10v12.97z"/><path d="M7 17.97l4.21-1.81.79-.34.79.34L17 17.97V5H7z" opacity=".3"/></svg>`;
  }
}