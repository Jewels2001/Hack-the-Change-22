<script setup>
import NavBar from '../components/NavBar.vue'
import AdBar from '../components/AdBar.vue'
import ArticleHalf from '../components/ArticleHalf.vue';
</script>

<script>
import Article from '../components/Article.vue';


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
            alert("Add");
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
        },

        translation() {
            alert("Translate");
            router.push('translate');
        }
    },

    components: {
        Article,
        AdBar
    }
}
</script>


<template>
    <div class="block m-1">
        <h1>This is a reading page where you read/view an article</h1>
            <div class="columns-2">
                <h1>This is an articles page</h1>
                <button @click="addArticle">Add Article</button>
                <button @click="translation">Translate</button>
            </div>
            
            <div class="article-container">
                <div v-for="article in this.articles">
                    <Article :data="article" />
                </div>
            </div>
        <ArticleHalf />
    </div>
    <AdBar />
</template>