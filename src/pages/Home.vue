<script setup>
import ItemList from '@/components/ItemList.vue'
import SearchField from '@/components/SearchField.vue'
import { useRouter } from 'vue-router'

/* The home page handles the root search field value,
 * passing it to both `SearchField` and `ItemList` components. */
let searchValue = $ref('')

function emptySearchValue() {
  searchValue = ''
}

// Programmatically use router to navigate to Pokémon details page.
const router = useRouter()

function openItemDetails(url) {
  /* Recover last part of API returned URL to use as unique route identifier.
   * For example, from https://pokeapi.co/api/v2/pokemon/10228/, we want to
   * get only the number 10228 as the unique identifier of this Pokémon. */
  const identifier = url.split('/').slice(-2, -1)[0]
  router.push(`/${identifier}`)
}
</script>

<template>
  <section
    class="flex justify-center items-center p-6 lg:p-8 bg-gray-200 border-b border-gray-300"
  >
    <SearchField v-model="searchValue" class="w-full max-w-md" />
  </section>

  <section class="w-full max-w-screen-xl m-auto p-6 lg:p-8">
    <ItemList
      :search="searchValue"
      @clear-search="emptySearchValue"
      @item-clicked="openItemDetails"
    />
  </section>
</template>
