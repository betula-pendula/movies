import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainContant from './MainContant.vue'
import Movie from './Movie.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: MainContant
  },
  {
    path: '/movie',
    component: Movie,
    props: (route) => ({ query: route.query.q, number: route.query.n})
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
