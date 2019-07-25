const iconsAlias = require('./_auto_generated_icons_alias');

module.exports = function createDefaultIconThemeAlias(theme = 'baseline') {
  const prefix = `Icon${theme.toLowerCase().replace(/./, m => m.toUpperCase())}`;
  const themeIconAlias = {};
  Object.keys(iconsAlias).forEach(libPath => {
    const libAlias = Object.assign({}, iconsAlias[libPath]);
    Object.keys(libAlias).forEach(component => {
      if (!component.startsWith(prefix)) return;
      const alias = libAlias[component];
      libAlias[component] = [
        `md-icon-${alias.split('-').pop()}`,
        alias
      ];
    });
    themeIconAlias[libPath] = libAlias;
  });
  return Object.assign({
    'jinge-material/src/avatar': {
      Avatar: 'md-avatar'
    },
    'jinge-material/src/button': {
      Button: 'md-button'
    },
    'jinge-material/src/icon': {
      Icon: 'md-icon'
    },
    'jinge-material/src/checkbox': {
      Checkbox: 'md-checkbox'
    },
    'jinge-material/src/divider': {
      Divider: 'md-divider'
    },
    'jinge-material/src/overlay': {
      Overlay: 'md-overlay'
    },
    'jinge-material/src/radio': {
      Radio: 'md-radio'
    },
    'jinge-material/src/switch': {
      Switch: 'md-switch'
    },
    'jinge-material/src/content': {
      Content: 'md-content'
    },
    'jinge-material/src/ripple': {
      Ripple: 'md-ripple',
      Wave: 'md-wave'
    },
    'jinge-material/src/portal': {
      Portal: 'md-portal'
    },
    'jinge-material/src/spinner': {
      Spinner: 'md-spinner'
    },
    'jinge-material/src/progress': {
      Progress: 'md-progress-bar'
    },
    'jinge-material/src/toolbar': {
      Toolbar: 'md-toolbar'
    },
    'jinge-material/src/card': {
      Card: 'md-card',
      CardActions: 'md-card-actions',
      CardArea: 'md-card-area',
      CardHeader: 'md-card-header',
      CardHeaderText: 'md-card-header-text',
      CardContent: 'md-card-content',
      CardMedia: 'md-card-media',
      CardMediaCover: 'md-card-media-cover',
      CardMediaActions: 'md-card-media-actions',
      CardExpand: 'md-card-expand',
      CardExpandContent: 'md-card-expand-content',
      CardExpandTrigger: 'md-card-expand-trigger'
    },
    'jinge-material/src/dialog': {
      Dialog: 'md-dialog',
      DialogTitle: 'md-dialog-title',
      DialogContent: 'md-dialog-content',
      DialogActions: 'md-dialog-actions',
      DialogAlert: 'md-dialog-alert',
      DialogConfirm: 'md-dialog-confirm',
      DialogPrompt: 'md-dialog-prompt'
    },
    'jinge-material/src/list': {
      List: 'md-list',
      ListItem: 'md-list-item',
      ListItemButton: 'md-list-item-button',
      ListItemContent: 'md-list-item-content',
      ListItemDefault: 'md-list-item-default',
      ListItemLink: 'md-list-item-link',
      ListItemUISref: 'md-list-item-uisref',
      ListItemExpand: 'md-list-item-expand'
    },
    'jinge-material/src/popover': {
      Popover: 'md-popover'
    },
    'jinge-material/src/popconfirm': {
      Popconfirm: 'md-popconfirm'
    },
    'jinge-material/src/subheader': {
      Subheader: 'md-subheader'
    },
    'jinge-material/src/tooltip': {
      Tooltip: 'md-tooltip'
    }
  }, themeIconAlias);
};