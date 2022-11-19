<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="navbar">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />

    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is our translator webapp.
    </h3>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">bong</RouterLink>
            <RouterLink to="/articles">Articles</RouterLink>
            <RouterLink to="/profile">Profile</RouterLink>
            <RouterLink to="/read">Read</RouterLink>
            <RouterLink to="/translate">Translate</RouterLink>
          </nav>
  </div>
</template>

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
