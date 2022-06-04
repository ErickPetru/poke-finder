<script setup>
import Header from '@/components/Header.vue'
import ItemList from '@/components/ItemList.vue'
import SearchField from '@/components/SearchField.vue'

let searchValue = $ref('')

function emptySearchValue() {
  searchValue = ''
}
</script>

<template>
  <Header>Vue 3 Pokémon Finder</Header>

  <main>
    <section
      class="flex justify-center items-center p-6 lg:p-8 bg-gray-200 border-b border-gray-300"
    >
      <SearchField v-model="searchValue" class="w-full max-w-md" />
    </section>

    <section class="w-full max-w-screen-xl m-auto p-6 lg:p-8">
      <ItemList :search="searchValue" @clear-search="emptySearchValue" />
    </section>
  </main>
</template>
