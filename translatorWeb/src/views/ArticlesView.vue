<script>
import Article from '../components/Article.vue'
import AdBar from '../components/AdBar.vue'

import axios from 'axios'

export default {
    data() {
        return {
            articles: []
        }
    },

    mounted() {
        axios.get("https://us-central1-project-kingbob.cloudfunctions.net/articles/getArticles")
            .then((res) => {
                this.articles = res.data.data;
            })
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
    </div>

    <div class="article-container">
        <div v-for="article in this.articles">
            <Article :data="article"/>
        </div>
    </div>
    <AdBar />
</template>

<style>
.article-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>