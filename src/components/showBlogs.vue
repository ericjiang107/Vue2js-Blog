<template>
  <div id="show-blogs">
      <!-- show a list of the blogs -->
      <h1>All Blog Articles</h1>
      <div class="single-blog" v-for="blog in blogs" v-bind:key="blog">
          <!-- don't want to hardcode the blogs but instead showcase them dynamically -->
          <h2> {{ blog.title }} </h2>
          <article>
              {{ blog.body }}
          </article>
      </div>

  </div>
</template>

<script>


export default {

    components: {
        
    },
    data () {
        return {
            blogs: [],
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
