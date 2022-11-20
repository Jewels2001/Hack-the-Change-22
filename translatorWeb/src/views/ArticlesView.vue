<script>
import Article from '../components/Article.vue'
import AdBar from '../components/AdBar.vue'

import axios from 'axios'

const articleAPI = "https://us-central1-project-kingbob.cloudfunctions.net/articles/"

export default {
    data() {
        return {
            articles: []
        }
    },

    mounted() {
        this.getArticles();
    },

    methods: {
        getArticles() {
            axios.get(articleAPI + "getArticles")
                .then((res) => {
                    this.articles = res.data.data;
                })
        },

        addArticle() {
            axios.post(articleAPI + "createArticle", {
                title: "This is article #" + (Date.now() % 100).toString(),
                body: "This article was submitted by the user. Our parsing and translation API services would be processing the data as we speak!"
            })
                .then((res) => {
                    console.log(res.data.msg);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                })
                .finally(() => {
                    this.getArticles();
                })
        }
    },

    components: {
        Article,
        AdBar
    }
}
</script>

<template>
    <div class="columns-2">
        <h1>This is an articles page</h1>
        <button @click="this.addArticle()">Add Article</button>
    </div>

    <div class="article-container">
        <div v-for="article in this.articles">
            <Article :data="article" />
        </div>
    </div>
    <AdBar />
</template>

<style>
.article-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
}
</style>