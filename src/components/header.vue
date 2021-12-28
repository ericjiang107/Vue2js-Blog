<template>
    <nav>
        <ul>
            <li>
                <!-- use router-link so when clicked, will take you to the said location -->
                <router-link to="/" exact>Blog</router-link>
            </li>
            <li>
                <router-link to="/add" exact>Add New Blog</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default{
    
};

</script>

<style scoped>
    ul {
        list-style-type: none;
        text-align: center;
        margin: 0px;
    }

    li {
        display: inline-block;
        margin: 0px 10px;
    }

    a {
        color: #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }

    nav {
        background: #444;
        padding: 14px 0px;
        margin-bottom: 40px;
    }

    .router-link-active {
        background: lightgray;
        color: red;
    }
</style>
