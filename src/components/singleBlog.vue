<template>
    <div id="single-blog">
        <h1> {{ blog.title }} </h1>
        <article>
            {{ blog.body }}
        </article>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // adding in parameters ":" within the routing:
            id: this.$route.params.id,
            blog: {},
        }
    },
    created() {
        // inserts the parameter defined in id and concatenates it with the url
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            console.log(data);
            this.blog = data.body;
        });
    }
}

</script>

<style scoped>
    #single-blog {
        max-width: 960px;
        margin: 0px autp;
    }
</style>