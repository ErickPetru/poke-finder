<script setup>
import { API_URL, LOADING_DELAY } from '@/helpers/constants'
import { capitalize, padZeros, removeCharacter } from '@/helpers/filters'
import { promiseTimeout, useFetch } from '@vueuse/core'
import { onMounted } from 'vue'

// Starting reactive object to handle the state of the API fetch.
let fetchState = $ref({ isFetching: true, error: null, data: null })

// When the component is mounted in the DOM.
onMounted(async () => {
  // Simulate a delay to see loading state...
  await promiseTimeout(LOADING_DELAY)

  // This API doesn't support server-side search, all records loaded.
  fetchState = await useFetch(`${API_URL}/pokemon/?limit=9999`).get().json()
})

// Computed manipulated list of API results.
const items = $computed(() => {
  return fetchState.data.results.map((item, index) => ({
    id: index + 1,
    ...item
  }))
})
</script>

<template>
  <!-- In case we have an API fetch error, show it. -->
  <div v-if="fetchState.error">
    <h2 class="font-bold text-xl text-red-700 mb-2">Oops!</h2>
    <p>
      Sorry, it wasn't possible to load the list.<br />
      The returned error was: <i>{{ fetchState.error }}</i
      >.
    </p>
  </div>

  <!-- Otherwise, show loading interface if API fetch is happening now. -->
  <div v-else-if="fetchState.isFetching">
    <ol
      class="flex flex-wrap justify-center gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="_ of 12"
        class="flex-initial flex rounded h-24 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)] animate-pulse bg-gray-200"
      />
    </ol>
  </div>

  <!-- Otherwise, we have real API results to show. -->
  <ol
    v-else
    class="flex flex-wrap justify-center gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  >
    <li
      v-for="item of items"
      :key="item.id"
      class="flex-initial flex rounded bg-white shadow h-24 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
    >
      <a
        :href="`#${item.id}`"
        class="flex-1 flex flex-col justify-center rounded border border-white bg-white outline outline-2 outline-offset-1 outline-transparent focus-visible:outline-black hover:bg-red-600 hover:border-black/50 group transition-all"
      >
        <small class="opacity-70 transition-colors group-hover:text-white"
          >#{{ padZeros(item.id) }}</small
        >
        <strong class="transition-colors group-hover:text-white">{{
          capitalize(removeCharacter(item.name, '-'))
        }}</strong>
      </a>
    </li>
  </ol>
</template>
