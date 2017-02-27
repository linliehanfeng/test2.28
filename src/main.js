import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//路由，网络访问，状态管理的引入
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App)
})
