<template>
<!-- for custom directives, the value must be written using single quotations within double quotations -->
<!-- arguments for custom directives are anything after the ':' -->
  <div id="show-blogs" v-theme:column="'wide'">
      <!-- show a list of the blogs -->
      <h1>All Blog Articles</h1>
      <!-- custom search filter bar -->
      <input type="text" v-model="search" placeholder="search blogs">
      <div class="single-blog" v-for="blog in filteredBlogs" v-bind:key="blog">
          <!-- don't want to hardcode the blogs but instead showcase them dynamically -->
          <!-- we can create custom directives for different functionalities -->
          <!-- we can add filters by adding a pip and the name -->
          <!-- to add in custom/dynamic id instead of hardcoding -->
            <router-link v-bind:to="'/blog/' + blog.id">
              <h2 v-rainbow> {{ blog.title | to-uppercase }} </h2>
            </router-link>
          <article>
              {{ blog.body | snippet}}
          </article>
      </div>

  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixing';

export default {

    components: {
        
    },
    data () {
        return {
            blogs: [],
            search: '',
        }
    },
    methods: {
        
    },
    // using lifecycle hook to fire 
    // created() will wait for the first component that is created
    // Here is where we add in the GET requests
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
            console.log(data);
            // to access something specific within data:
            // slice(0,10) will slice it and give back the first 10 elements of that array
            this.blogs = data.body.slice(0,10);
        })
    },
    // computed: {
    //     // search filter bar
    //     filteredBlogs: function(){
    //         // returns the current blogs array
    //         return this.blogs.filter((blog) => {
    //             // searches for the title within the blog and tries to find a match
    //             return blog.title.match(this.search);
    //         });
    //     }
    // },
    // to register things locally instead of globally:
    // filters: {
    //     'to-uppercase': function(){
    //         return value.toUpperCase();
    //     }
    // },
    // // similar to filters, we can register directives locally:
    // directives:{
    //     'rainbow': {
    //         bind(el, binding, vnode){
    //             el.style.color = "red";
    //         }
    //     },
    // },
    mixins: [searchMixin]
}
</script>

<style>

#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0px;
    box-sizing: border-box;
    background: #eee;
}

</style>
