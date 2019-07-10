
import {
  PageAbout,
  PageHome,
  PageLicense,
  PageGettingStarted,
  PageUiElements,
  PageElevation,
  PageComponents,
  PageButton,
  PageCheckbox,
  PageRadio,
  PageSwitch,
  PageContent,
  PageToolbar,
  PageDialog,
  PageIcon,
  PageSpinner,
  PageProgress,
  PagePopover,
  PageTooltip,
  PagePopconfirm,
  PageCard
} from './pages';

export const componentsStates = [{
  name: 'components',
  url: '/components',
  component: PageComponents,
  redirectTo: 'components.button'
}, {
  name: 'components.button',
  url: '/button',
  component: PageButton
}, {
  name: 'components.checkbox',
  url: '/checkbox',
  component: PageCheckbox
}, {
  name: 'components.radio',
  url: '/radio',
  component: PageRadio
}, {
  name: 'components.switch',
  url: '/switch',
  component: PageSwitch
}, {
  name: 'components.content',
  url: '/content',
  component: PageContent
}, {
  name: 'components.toolbar',
  url: '/toolbar',
  component: PageToolbar
}, {
  name: 'components.dialog',
  url: '/dialog',
  component: PageDialog
}, {
  name: 'components.icon',
  url: '/icon',
  component: PageIcon
}, {
  name: 'components.spinner',
  url: '/spinner',
  component: PageSpinner
}, {
  name: 'components.progress',
  url: '/progress',
  component: PageProgress
}, {
  name: 'components.popover',
  url: '/popover',
  component: PagePopover
}, {
  name: 'components.tooltip',
  url: '/tooltip',
  component: PageTooltip
}, {
  name: 'components.popconfirm',
  url: '/popconfirm',
  component: PagePopconfirm
}, {
  name: 'components.card',
  url: '/card',
  component: PageCard
}];

export const uiElementsStates = [{
  name: 'ui-elements',
  url: '/ui-elements',
  component: PageUiElements,
  redirectTo: 'ui-elements.elevation'
}, {
  name: 'ui-elements.elevation',
  url: '/elevation',
  component: PageElevation
}];
export const singleStates = [{
  name: 'home',
  url: '/',
  component: PageHome
}, {
  name: 'getting-started',
  url: '/getting-started',
  component: PageGettingStarted
}, {
  name: 'about',
  url: '/about',
  component: PageAbout
}, {
  name: 'license',
  url: '/license',
  component: PageLicense
}];
export default [
  ...componentsStates,
  ...uiElementsStates,
  ...singleStates
];
