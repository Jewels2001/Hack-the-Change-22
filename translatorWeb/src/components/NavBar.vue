<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="
    text-babyblue 
    bg-gold
    absolute 
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
          <RouterLink to="/"><heading class="font-heading text-5xl">TRANSLATE.IO</heading></RouterLink>
          <RouterLink to="/articles" class="hover:italic">Articles</RouterLink>
          <RouterLink to="/translate" class="hover:italic">Translate</RouterLink>
          <RouterLink to="/profile" ><img alt="profile" class="w-10 h-10 my-2 hover:scale-125" src="@/assets/userIcon.png"/></RouterLink>
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