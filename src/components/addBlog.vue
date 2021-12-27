<template>
  <div id="styleBlog">
    <h2>Blog Post</h2>
    <!-- input binding -->
    <!-- to show/hide form based on submission, we can use v-if -->
    <form v-if="!submitted">
        <label>Blog Title</label>
        <!-- the v-model.lazy will stop the display of whatever you type in another section -->
        <input type="text" required v-model.lazy='blog.title'>
        <label>Blog Content</label>
        <textarea v-model.lazy='blog.content'></textarea>
        <!-- whenever someone clicks on the checkbox, it will add that value into the location as strings -->
        <div id="checkBoxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>

            <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories"/>

            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories"/>

            <label>Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories"/>

        </div>

        <!-- Select Box Binding -->
        <label>Author</label>
        <select v-model='blog.author'>
            <!-- loop through the different authors in a data object instead of hard coding -->
            <option v-for="author in authors" v-bind:key='author'> {{ author }} </option>
        </select>
        <!-- we need an event modifier (.prevent) that will prevent the behavior of going anywhere else -->
        <button v-on:click.prevent="postRequest">Add Blog</button>
    </form>

    <!-- Shows if the form has been submitted or not: -->
    <div v-if="submitted">
        <h3>Post successfully added!</h3>
    </div>

    <div id="preview">
        <!-- preview the blogs -->
        <h3>Preview Blog Submission</h3>
        <p>Blog title: {{ blog.Title }} </p>
        <p>Blog Content: </p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories: </p>
        <ul>
            <!-- dynamically output/show what has been added to the blog.categoeries section without hardcoding -->
            <!-- use v-for to cycle through the data -->
            <li v-for="category in blog.categories" v-bind:key='category'>
                {{ category }}
            </li>
        </ul>
        <p>Author: {{ blog.author }} </p>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
        // creating a blog object that stores all the information as an array instead of displaying the information seperately
      blog: {
        title: '',
        content: '', 
        categories: [],
        author: '',
      },
        authors: ['Net Ninja', 'Angular Avenger', 'Vue Vindicator'],
        // keep track to see if the form has been submitted or not
        submitted: false
    }
  },
  methods: {
    postRequest: function(){
        // http capabilties because of vue-resource:
        // using jsonplaceholder.typicode.com to make requests
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
            // we can grab the title from blog for example and populate it within title in the website/database
            title: this.blog.title,
            body: this.blog.content,
            userID: 1,
            // after all of this, we use .then() since it returns in the form of a promise meaning it will take some time to complete
        }).then(function(data){
            console.log(data);
            this.submitted = true;
            alert("alert test case for v-if statement");
        })
    },
  }
}
</script>

<style scoped>
#styleBlog * {
    /* everything within the styleBlog is sized within a box - like a container */
    box-sizing: border-box;
}

#styleBlog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0px;
}

h3 {
    margin-top: 10px;
}

#checkBoxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkBoxes label {
    display: inline-block;
}

</style>