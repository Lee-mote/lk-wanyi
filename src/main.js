import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引进路由器
import './utils/rem' // 移动端适配
import './utils/reset.css' // 样式重置

import {
  Tabbar,
  TabbarItem,
  Button,
  Tab,
  Tabs,
  Icon,
  Swipe,
  Search,
  SwipeItem,
  Sidebar,
  SidebarItem
} from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(Search)
Vue.use(SwipeItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.config.productionTip = false 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
