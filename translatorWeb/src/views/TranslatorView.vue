<script setup>
import NavBar from '../components/NavBar.vue'
import AdBar from '../components/AdBar.vue'
import ArticleHalf from '../components/ArticleHalf.vue'
import { EMPTY_OBJ } from '@vue/shared';


// function save() {
    
// }


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
        save() {
            var url = "";

            alert('Saved!')
            const html = editor.getHTML()
            const json = editor.getJSON()
            console.log(html);
            // if(html != "") {
            //     axios.post(url, html)
            //         .then(response => this.ID = response.data.id)
            // }
            // if(e) {
            //     alert(e.target.tagName)
            // }
        }
    }
}
</script>

<template>
    <div class="block m-1">
        <h1>This is where translations happen</h1>
        <div class="flex columns-2">
            <div class="basis-1/2">
                <p>a article goes here</p>
            </div>
            <div class="basis-1/2">
                <ArticleHalf />
            </div>
        </div>
        <div class="flex w-screen place-content-center">
            <button @click="save">Save Article Translations</button>
            <button>Load Article Translations</button>
        </div>
    </div>
    <AdBar />
</template>
