<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="fixed top-16">
    <img alt="hero" class=" brightness-75 w-full blur-sm" src="@/assets/bg-newspaper.jpg"/>
  <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col h-screen content-center justify-center">
      <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
        <div class="absolute top-80 bg-gold rounded shadow-2xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <TheWelcome />
        </div>
      </div>
    </main>
  </div>
</div>
</template>
