import {
  Icon
} from '../src/icon';

const __svg_IconBaselineFlight = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`;

export class IconBaselineFlight extends Icon {
  get svg() {
    return __svg_IconBaselineFlight;
  }
}

export class IconOutlinedFlight extends Icon {
  get svg() {
    return __svg_IconBaselineFlight;
  }
}

export class IconRoundFlight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69c-.3.19-.49.53-.49.89 0 .7.68 1.21 1.36 1L10 13.5V19l-1.8 1.35c-.13.09-.2.24-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59c0-.16-.07-.31-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1z"/></svg>`;
  }
}

export class IconSharpFlight extends Icon {
  get svg() {
    return __svg_IconBaselineFlight;
  }
}

export class IconTwotoneFlight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z"/></svg>`;
  }
}