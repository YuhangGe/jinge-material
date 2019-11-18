(function() {
  const LOCALE_KEY_NAME = 'jinge-material-site.locale';
  const SUPPORT_THEMES = ['default', 'default-dark'];
  const loaderSrc = document.body.querySelector('script').src;
  const buildHash = loaderSrc.match(/([^.]+)\.min.js$/);
  const root = buildHash ? '' : 'dist/';

  let env = window.__AppEnv;
  if (!env) env = window.__AppEnv = {};
  Object.assign(env, {
    production: !!buildHash,
    localeKey: LOCALE_KEY_NAME
  });

  /** loader utils **/
  function loadStyle(href) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      $s.href = href;
      document.head.appendChild($s);
    });
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('script');
      $s.src = root + src;
      $s.async = false; // force execute sequence
      $s.onload = resolve;
      $s.onerror = reject;
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    const pn = location.pathname;
    const pi = pn.indexOf('/', 1);
    let locale = pi > 0 ? pn.substring(1, pi) : null;
    if (locale === 'zh_cn' || locale === 'en') {
      localStorage.setItem(LOCALE_KEY_NAME, locale);
      return locale;
    }
    locale = localStorage.getItem(LOCALE_KEY_NAME) ||
      navigator.language.toLowerCase().replace(/-/g, '_');

    history.replaceState(null, null, `/${locale}/`);
    if (locale.startsWith('zh_')) {
      locale = 'zh_cn';
    } else if (locale !== 'en') {
      locale = 'en';
    }
    return locale;
  }
  function getTheme() {
    const theme = sessionStorage.getItem('JINGE_MATERIAL_THEME') || SUPPORT_THEMES[0];
    if (SUPPORT_THEMES.indexOf(theme) < 0) return SUPPORT_THEMES[0];
    return theme;
  }

  /** run application **/
  const locale = getLocale();
  Promise.all([
    locale === 'en' ? loadStyle('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700') : Promise.resolve(),
    loadStyle(`${root}css/jinge-material-site.${getTheme()}${buildHash ? `.${buildHash[1]}.min` : ''}.css`),
    loadScript(`locales/${locale}${buildHash ? `.${buildHash[1]}.min` : ''}.js`),
    loadScript(`js/jinge-material-site${buildHash ? `.${buildHash[1]}.min` : ''}.js`)
  ]).catch(err => {
    alert(`load fail with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
