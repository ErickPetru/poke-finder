<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="grid place-items-center bg-gradient-to-b from-red-500 to-red-600 border-b border-red-800 px-6 py-8 sm:px-12 lg:py-10"
  >
    <RouterLink
      to="/"
      class="rounded outline outline-2 outline-offset-4 outline-transparent focus-visible:outline-black transition-all"
    >
      <img src="@/assets/logo.png" alt="PokéDex" class="max-w-md w-full" />
      <h1 class="font-bold font-mono text-white leading-none">
        <slot />
      </h1>
    </RouterLink>
  </header>
</template>

<style scoped>
h1 {
  font-size: clamp(24px, 4vw, 42px);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

@supports (-webkit-text-stroke: black) {
  h1 {
    text-shadow: none;
    -webkit-text-stroke: clamp(1px, 0.25vw, 2px) black;
    -webkit-text-fill-color: white;
  }
}
</style>
