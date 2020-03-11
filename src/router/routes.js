import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worth from '../pages/Worth/Worth.vue'
import Shop from '../pages/Shop/Shop.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../components/login'
import PhoneLogin from '../components/login/phoneLogin/index.vue'
import UserLogin from '../components/login/userLogin/index.vue'
import LoginTab from '../components/login/loginTab/index.vue'


const routes = [
  {
    path: '/msite',
    component: Msite,
   
  },
  {
    path: '/sort',
    component: Sort,
    children: [
      {
        path: '/sort/:id',
      },
      {
        path: '/sort',
        redirect:'/sort/11'
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/worth',
    component: Worth,
    
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/order',
    component: Order,
   
  },
  {
    path: '/login',
    component: Login,
   
  },
  {
    path: '/loginTab',
    component: LoginTab,
  },
  {
    path: '/phoneLogin',
    component: PhoneLogin,
  },
  {
    path: '/userLogin',
    component: UserLogin,
  },
  {
    path: '/',
    redirect: '/msite'
  }
]

export default routes
