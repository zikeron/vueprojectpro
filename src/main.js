import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './ChildCompoente.vue'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from '@/routes'
import msToMm from '@/filters/ms-to-min'
import blur from '@/directives/blur'
import store from '@/store'

Vue.component('child', ChildComponent)
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
