<script setup>
import NavBar from '../components/NavBar.vue'
import AdBar from '../components/AdBar.vue'
import ArticleHalf from '../components/ArticleHalf.vue';
</script>


<template>
    <div class="block m-1">
        <h1>This is a reading page where you read/view an article</h1>
        <ArticleHalf />
    </div>
    <AdBar />
</template>