import Msite from '../pages/Msite/Msite.vue'
import Sort from '../pages/Sort/Sort.vue'
import Worth from '../pages/Worth/Worth.vue'
import Shop from '../pages/Shop/Shop.vue'
import Order from '../pages/Order/Order.vue'

const routes = [
  {
    path: '/msite',
    component: Msite,
   
  },
  {
    path: '/sort',
    component: Sort,
   
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
    path: '/',
    redirect: '/msite'
  }
]

export default routes
