<script setup>
import NavBar from '../components/NavBar.vue'
import AdBar from '../components/AdBar.vue'
import ArticleHalf from '../components/ArticleHalf.vue'
</script>

<template>
    <div class="block p-1">
        <h1>This is where translations happen</h1>
        <div class="flex columns-2">
            <div class="basis-1/2">
                <p>a article goes here</p>
            </div>
            <div class="basis-1/2">
                <ArticleHalf />
            </div>
            
        </div>
    </div>
    <AdBar />
</template>
