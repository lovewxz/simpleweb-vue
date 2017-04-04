// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(resource)
Vue.use(VueLazyload, {
  filter: {
    webp ({src}) {
      const URL = 'http://m.0755mingyi.com'
      src = URL + src
      return src
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
