<script>
import ArticlesView from './ArticlesView.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, watchEffect } from 'vue';

export default {


  components: {
    ArticlesView,
  }
}
</script>

<template>
  <main>
    <ArticlesView />
  </main>
</template>
