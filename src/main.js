import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import axios from './config/httpConfig'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
