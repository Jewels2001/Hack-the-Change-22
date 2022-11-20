<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      user: this.loggedIn
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
  
  updated() {
    console.log("USER:", this.user);
  },

  props: {
    loggedIn: String
  }
}
</script>

<template>
  <div class="
    text-babyblue 
    bg-gold
   <!--  bg-white -->
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
        text-black
        text-xl
        ">
      <RouterLink to="/">
        <div class="font-heading text-5xl">TRANSLATEME</div>
      </RouterLink>
      <RouterLink to="/articles" class="hover:italic">Articles</RouterLink>
      <RouterLink to="/translate" class="hover:italic">Translate</RouterLink>
      <div v-if="this.user">
        <RouterLink to="/profile"><img alt="profile" class="w-10 h-10 my-2 hover:scale-125" src="@/assets/userIcon.png" /></RouterLink>
        <button @click="this.logout()">Log Out</button>
      </div>
      <div v-else>
        <RouterLink to="/register" class="hover:italic">Sign Up</RouterLink>
        <RouterLink to="/login" class="hover:italic">Login</RouterLink>
      </div>
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