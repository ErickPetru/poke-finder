<script setup>
import ItemList from '@/components/ItemList.vue'
import SearchField from '@/components/SearchField.vue'
import { useRouter } from 'vue-router'

let searchValue = $ref('')

function emptySearchValue() {
  searchValue = ''
}

const router = useRouter()

function openItemDetails(url) {
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
