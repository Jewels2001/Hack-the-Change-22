<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      userID: this.loggedIn
    }
  },

  methods: {
    logout() {
      const auth = getAuth();
      const router = this.$router;
      signOut(auth).then(() => {
        alert("Successfully logged out");
        router.push('/');
      })
      .catch(error => {
        alert(error.message);
        router.push('/');
      })
    }
  },
  
  props: {
    loggedIn: String
  }
}
</script>

<template>
  <div class="
    text-babyblue 
    bg-white
    sticky top-0 
    w-full
    ">
    <nav class="
        w-full
        flex flex-wrap
        items-center
        px-2
        justify-around
        shadow-lg
        text-navy
        text-xl
        ">
      <RouterLink to="/">
        <heading class="font-heading text-5xl">TRANSLATE.IO</heading>
      </RouterLink>
      <RouterLink to="/articles">Articles</RouterLink>
      <RouterLink to="/translate">Translate</RouterLink>
      <RouterLink v-if="this.userID === ''" to="/register">Sign Up</RouterLink>
      <RouterLink v-if="this.userID === ''" to="/login">Login</RouterLink>
      <RouterLink v-if="this.userID !== ''" to="/profile"><img alt="profile" class="w-10 h-10 my-2" src="@/assets/userIcon.png" /></RouterLink>
      <button v-if="this.userID !== ''" @click="this.logout()">Log Out</button>
    </nav>
  </div>


</template>

<!--
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

-->