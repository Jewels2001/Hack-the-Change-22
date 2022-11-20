<script>
import Article from '../components/Article.vue'
import AdBar from '../components/AdBar.vue'

import axios from 'axios'
import router from '../router'

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
                });
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
        },

        read() {
            alert("Read");
            router.push('read');
        }
    },

    components: {
        Article,
        AdBar
    }
}
</script>


<template>

<!--
    <div class="columns-2">
        <h1>This is an articles page</h1>
        <button @click="this.addArticle()">Add Article</button>
    </div>

    <div class="article-container">
        <div v-for="article in this.articles">
            <Article :data="article" />
        </div>
     -->

    <div class="block m-1">
        <h1>This is an articles page</h1>
        <table class="table-auto w-full border border-white">
            <thead border-inherit>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Language</th>
                    <th>Translated?</th>
                    <th>Original?</th>
                </tr>
            </thead>
            <tbody border-inherit>
                <tr>
                    <td>All about Minions</td>
                    <td>Some words here</td>
                    <td>English</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <!-- {#each articles as article} -->
                <!-- <tr v-for="(title, author, lang) in article"> -->
                <tr v-for="article in this.articles">
                    <!-- <Article :data="article" /> -->
                    <!-- <div v-for="article in this.articles"> -->
                        <td @click="read" class="text-blue hover:text-violet"> {{ article.title }}</td>
                        <td>{{ article.body }}</td>
                        <!-- <Article :data="article" /> -->
                    <!-- </div> -->
                    <td> English </td>
                    <td> No </td>
                    <td> Yes </td>
                </tr>
                <!-- {/each} -->
            </tbody>
        </table>
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