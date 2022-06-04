<script setup>
import IconArrowCircleLeft from '@/assets/icons/arrow-circle-left.svg?component'
import IconCircleOff from '@/assets/icons/circle-off.svg?component'
import LikeButton from '@/components/LikeButton.vue'
import TypeBadge from '@/components/TypeBadge.vue'
import { LOADING_DELAY } from '@/helpers/constants'
import { capitalize, padZeros, removeCharacter } from '@/helpers/filters'
import { promiseTimeout, useFetch, useTitle } from '@vueuse/core'
import { onMounted, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({ url: String })

// Starting reactive object to handle the state of the API fetch.
let fetchState = $ref({ isFetching: true, error: null, data: null })

// When the component is mounted in the DOM.
onMounted(async () => {
  // Simulate a delay to see loading state...
  await promiseTimeout(LOADING_DELAY)

  // Fetch the Pokémon based on the URL received as prop.
  fetchState = await useFetch(props.url).get().json()
})

// Extract `fetchState.data` as `pokemon` just to simplify use in template.
const pokemon = $computed(() => fetchState.data)

// Computed Pokémon name to use both in template and window title.
const pokemonName = $computed(() => {
  return capitalize(removeCharacter(pokemon?.name ?? '', '-'))
})

// Watch changes to `pokemonName`, to reactively update window title.
watchEffect(() =>
  useTitle(pokemonName ? `${pokemonName} - PokéDex` : 'PokéDex')
)
</script>

<template>
  <!-- In case we have an API fetch error, show it. -->
  <div v-if="fetchState.error">
    <h2 class="font-bold text-xl text-red-700 mb-2">Oops!</h2>
    <p>Sorry, it wasn't possible to load this Pokémon.</p>
  </div>

  <!-- Otherwise, if fetch isn't happening now and no Pokémon found. -->
  <div
    v-else-if="!fetchState.isFetching && !pokemon"
    class="flex flex-col items-center gap-2 text-gray-500"
  >
    <IconCircleOff class="w-24 h-24 p-2 text-gray-300" />
    <p>Pokémon not found!</p>
  </div>

  <!-- Otherwise, build screen layout to show Pokémon or loading state. -->
  <template v-else>
    <h2
      class="inline-flex gap-3 items-center text-2xl font-bold"
      :class="{
        'w-40 h-8 m-auto rounded animate-pulse bg-gray-200 text-black/0':
          fetchState.isFetching
      }"
    >
      {{ pokemonName }}

      <LikeButton v-if="!fetchState.isFetching" :name="pokemon?.name" />
    </h2>

    <div class="flex flex-wrap justify-center gap-6 my-10">
      <div class="flex gap-2">
        <b>Number:</b>
        <i
          class="inline-block"
          :class="{
            'w-10 h-6 rounded animate-pulse bg-gray-200 text-black/0':
              fetchState.isFetching
          }"
          >#{{ padZeros(pokemon?.id) }}</i
        >
      </div>

      <div class="flex gap-2">
        <b>Height:</b>
        <i
          class="inline-block"
          :class="{
            'w-10 h-6 rounded animate-pulse bg-gray-200 text-black/0':
              fetchState.isFetching
          }"
          >{{ pokemon?.height / 10 }} m</i
        >
      </div>

      <div class="flex gap-2">
        <b>Weight:</b>
        <i
          class="inline-block"
          :class="{
            'w-10 h-6 rounded animate-pulse bg-gray-200 text-black/0':
              fetchState.isFetching
          }"
          >{{ pokemon?.weight / 10 }} kg</i
        >
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 my-10">
      <h3 class="flex-auto w-full text-small text-black/60">Images</h3>

      <div
        v-for="image in [
          'front_default',
          'back_default',
          'front_shiny',
          'back_shiny'
        ]"
        class="flex flex-col gap-1 justify-center items-center w-36 h-36 rounded"
        :class="{
          'animate-pulse bg-gray-200 text-black/0': fetchState.isFetching,
          'bg-white shadow': !fetchState.isFetching
        }"
      >
        <img
          v-if="pokemon?.sprites[image]"
          :src="pokemon?.sprites[image]"
          :alt="`Sprite ${removeCharacter(image, '_')}`"
          class="w-24 h-24"
        />
        <IconCircleOff
          v-else-if="!fetchState.isFetching"
          class="w-24 h-24 p-2 text-gray-300"
        />

        <span class="block text-xs leading-none">{{
          capitalize(removeCharacter(image, '_'))
        }}</span>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-2 my-10">
      <h3 class="flex-auto w-full text-small text-black/60 mb-4">Types</h3>

      <TypeBadge
        v-for="item of pokemon?.types ?? 2"
        :name="item.type?.name ?? ''"
      />
    </div>
  </template>

  <RouterLink
    to="/"
    is="button"
    class="mt-10 inline-flex gap-2 items-center h-8 px-3 rounded active:text-black/60 border border-black/5 border-b-black/40 bg-white/70 hover:bg-neutral-900/5 active:bg-neutral-700/5 active:border-black/5 outline outline-2 outline-offset-1 outline-transparent focus-visible:outline-black transition-all"
  >
    <IconArrowCircleLeft class="w-4 h-4" />
    <span>Go back</span>
  </RouterLink>
</template>
