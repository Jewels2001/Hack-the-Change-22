<script setup>
import NavBar from '../components/NavBar.vue'
import AdBar from '../components/AdBar.vue'
</script>

<script>

import axios from "axios";

export default {
    data() {
        return {
            article: "",
            ID: null,
        }
    },
    methods: {
        load() {
            alert("Loaded!")
        },
    }
}
</script>

<template>
    <div class="block m-1">
        <h1>This is an articles page</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Language</th>
                    <th>Translated?</th>
                    <th>Original?</th>
                </tr>
            </thead>
            <tbody>
                {#each articles as article}
                <tr v-for="(title, author, lang) in article">
                    <td> {{ title }}</td>
                    <td> {{ author }}</td>
                    <td> {{ lang }}</td>
                    <td> No </td>
                    <td> Yes </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <AdBar />
</template>