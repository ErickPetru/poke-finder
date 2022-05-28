<script setup>
import Header from '@/components/Header.vue'
import ItemList from '@/components/ItemList.vue'
</script>

<template>
  <Header>Vue 3 Pokémon Finder</Header>

  <main>
    <section
      class="flex justify-center items-center p-6 lg:p-8 bg-gray-200 border-b border-gray-300"
    >
      <i>TODO: Search bar.</i>
    </section>

    <section class="w-full max-w-screen-xl m-auto p-6 lg:p-8">
      <ItemList />
    </section>
  </main>
</template>
