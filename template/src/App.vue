<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Router from 'vue-router';
import routes from './router-config';
{{#elementui}}
import ElementUI from 'element-ui';
{{/elementui}}

Vue.use(Router);
{{#elementui}}
Vue.use(ElementUI);
{{/elementui}}

const router = new Router({
    routes
});

export default {
  name: 'app',
  router: router,
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
