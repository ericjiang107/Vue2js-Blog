import Vue from 'vue';
import App from './App.vue';
// to import plugins:
import VueResource from 'vue-resource';
// to import the routing:
import VueRouter from 'vue-router';
import Routes from './routes';

// tell Vuejs, we want to use this in our application:
Vue.use(VueResource)
// vue-resource allows us to make web requests and handle responses

// creating a global custom directive:
// ('name of direction', {object of the controls})
Vue.directive('rainbow', {
  // using a life cycle hook called bind
  // bind will fire when the directive is bound to the element
  bind(el, binding, vnode){
    // grabs the el, the css style of color
    el.style.color = "red";
    // to use the '#' random numbers:
    // '#' + Math.random().toString().slice(2,8)
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode){
    // functionality of the value/name that the binding is = to:
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px';
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }
    if(binding.arg == 'column'){
      el.style.background = 'gray';
      el.style.padding = '20px';
    }
  }
});

// creating a global custom filter:
// the value within the function refers to data we used the filter on
// can register locally instead of globally (see showBlogs.vue under the filtered object)
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  // cut the text of blog.body down
  // by using the slice method, we only get the characters from 0 to 100
  return value.slice(0, 100) + '...';
})

// for routing
Vue.use(VueRouter);

// creating a new instance for the router:
const router = new VueRouter({
  // importing and registering the routes from routes.js file
  routes: Routes,
  // change the mode without the #/ 'hash' to history mode
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  // to use the router from our route instance:
  router: router
})
