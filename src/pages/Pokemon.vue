<script setup>
import { useRoute } from 'vue-router'
import { API_URL } from '@/helpers/constants'
import ItemView from '@/components/ItemView.vue'

const route = useRoute()

const url = $computed(() => {
  return `${API_URL}/pokemon/${route.params.identifier}/`
})
</script>

<template>
  <section class="w-full max-w-screen-xl m-auto p-6 lg:p-8">
    <ItemView :url="url" />
  </section>
</template>
