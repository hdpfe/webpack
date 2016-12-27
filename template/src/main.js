{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import Vue from 'vue'
import App from './App'
import Router from 'vue-router';
import routes from './router-config';
{{#elementui}}
import ElementUI from 'element-ui';
import 'element-theme-default';
{{/elementui}}


Vue.use(Router);

{{#elementui}}
Vue.use(ElementUI);
{{/elementui}}

const router = new Router({
    routes
});

new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})