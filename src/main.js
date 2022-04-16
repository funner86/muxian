import Vue from 'vue'
import App from './App'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import axios from 'axios'
import echarts from 'echarts'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.moment = moment;


Vue.use(router)
Vue.use(ElementUI)

Vue.use(echarts)
Vue.use(BaiduMap, {
  ak: 'XaTKYe4nl3j75GYvn9RKLReicnDquG1S'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  components: { App },
  template: '<App/>'
})

