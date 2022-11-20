<template>
    <div class="article-card">
        <h3>{{this.title}}</h3>
        <p>{{this.body}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: this.data.title,
            body: this.data.body
        }
    },

    props: {
        data: Object
    }    
}
</script>

<style>
.article-card {
    background-color: rgb(187, 187, 187);
    width: 400px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 6px black;
    color: black;
    padding: 5px;
    align-items: center;
}

.article-card h3 {
    background-color: rgb(94, 94, 94);
}
</style>