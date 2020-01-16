if (!EASY_ENV_IS_NODE) {
    const Vue = require('vue');
    const ElementUI = require('element-ui');
    Vue.use(ElementUI);
}