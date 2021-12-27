import Vue from 'vue';
import App from './App.vue';
// to import plugins:
import VueResource from 'vue-resource';

// tell Vuejs, we want to use this in our application:
Vue.use(VueResource)

// vue-resource allows us to make web requests and handle responses

new Vue({
  el: '#app',
  render: h => h(App)
})
