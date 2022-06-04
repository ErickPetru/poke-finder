<script setup>
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
import ItemList from '@/components/ItemList.vue'
import SearchField from '@/components/SearchField.vue'
import ItemView from '@/components/ItemView.vue'

let searchValue = $ref('')

function emptySearchValue() {
  searchValue = ''
}

let clickedURL = $ref(null)

function openItemDetails(url) {
  clickedURL = url
}
</script>

<template>
  <Header>Vue 3 Pokémon Finder</Header>

  <main>
    <RouterView />
  </main>

  <!-- <main>
    
  </main>

  <ItemView
    v-if="clickedURL"
    :url="clickedURL"
    class="fixed top-2 left-2 right-2 border border-black/40 bg-white rounded shadow-lg"
  /> -->
</template>
