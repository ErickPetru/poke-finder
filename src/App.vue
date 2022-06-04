<script setup>
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header>Vue 3 Pokémon Finder</Header>

  <main>
    <RouterView />
  </main>
</template>
