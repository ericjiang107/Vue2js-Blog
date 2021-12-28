// computed property of the search filter bar
// once we have the code here, we can delete it from the other files
export default {
    computed: {
        filteredBlogs: function(){
        // returns the current blogs array
            return this.blogs.filter((blog) => {
                // searches for the title within the blog and tries to find a match
                return blog.title.match(this.search);
            });
        }
    }
}