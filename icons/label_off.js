import {
  Icon
} from '../src/icon';

export class IconBaselineLabelOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.25 2.75l17 17L19 21l-2-2H5c-1.1 0-2-.9-2-2V7c0-.55.23-1.05.59-1.41L2 4l1.25-1.25zM22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5H8l11 11 3-4z"/></svg>`;
  }
}

export class IconOutlinedLabelOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 7l3.55 5-1.63 2.29 1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01 2 1.99H16zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62 2 4.03zM14.97 17H5V7.03L14.97 17z"/></svg>`;
  }
}

export class IconRoundLabelOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.59 12.58c.25-.35.25-.81 0-1.16l-3.96-5.58C17.27 5.33 16.67 5 16 5H8.66l10.7 10.73 2.23-3.15zM2.72 4.72l.87.87C3.23 5.95 3 6.45 3 7v10c0 1.1.9 2 2 2h12l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.14 3.31c-.38-.38-1.01-.39-1.4-.01-.41.38-.41 1.03-.02 1.42z"/></svg>`;
  }
}

export class IconSharpLabelOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12l-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z"/></svg>`;
  }
}

export class IconTwotoneLabelOff extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 7.03V17h9.97zM16 7h-5.37l7.29 7.29L19.55 12z" opacity=".3"/><path d="M16 7l3.55 5-1.63 2.29 1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01 2 1.99H16zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62 2 4.03zm3 3L14.97 17H5V7.03z"/></svg>`;
  }
}