<script setup>
import ItemView from '@/components/ItemView.vue'
import { API_URL } from '@/helpers/constants'
import { useRoute } from 'vue-router'

// Use current route to detect the Pokémon to load details.
const route = useRoute()

// Computed construction of the API URL to use to load Pokémon details.
const url = $computed(() => {
  return `${API_URL}/pokemon/${route.params.identifier}/`
})
</script>

<template>
  <section class="w-full max-w-screen-xl m-auto p-6 lg:p-8">
    <ItemView :url="url" />
  </section>
</template>
