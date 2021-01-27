// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
import './style/reset.less'
import AMap from 'vue-amap'


Vue.use(AMap)
Vue.use(less)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
