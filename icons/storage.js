import {
  Icon
} from '../src/icon';

const __svg_IconBaselineStorage = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></svg>`;

export class IconBaselineStorage extends Icon {
  get svg() {
    return __svg_IconBaselineStorage;
  }
}

export class IconOutlinedStorage extends Icon {
  get svg() {
    return __svg_IconBaselineStorage;
  }
}

export class IconRoundStorage extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm0-3h2v2H4v-2zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2zm4 1H4V5h2v2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm0-3h2v2H4v-2z"/></svg>`;
  }
}

export class IconSharpStorage extends Icon {
  get svg() {
    return __svg_IconBaselineStorage;
  }
}

export class IconTwotoneStorage extends Icon {
  get svg() {
    return __svg_IconBaselineStorage;
  }
}