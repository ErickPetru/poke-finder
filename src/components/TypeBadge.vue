<script setup>
import { capitalize } from '@/helpers/filters'

const props = defineProps({ name: String })
</script>

<template>
  <span
    class="grid place-items-center px-2 h-7 rounded"
    :class="{
      'w-20 animate-pulse bg-gray-200': !props.name,
      'border border-black/25': props.name,
      'bg-stone-200': props.name === 'normal',
      'bg-orange-600 text-white': props.name === 'fire',
      'bg-blue-700 text-white': props.name === 'water',
      'bg-lime-700 text-white': props.name === 'grass',
      'bg-yellow-400': props.name === 'electric',
      'bg-teal-200': props.name === 'ice',
      'bg-red-600 text-white': props.name === 'fighting',
      'bg-fuchsia-700 text-white': props.name === 'poison',
      'bg-amber-700 text-white': props.name === 'ground',
      'bg-purple-200': props.name === 'flying',
      'bg-rose-500 text-white': props.name === 'psychic',
      'bg-lime-200': props.name === 'bug',
      'bg-stone-600 text-white': props.name === 'rock',
      'bg-purple-500 text-white': props.name === 'ghost',
      'bg-gray-800 text-white': props.name === 'dark',
      'bg-indigo-800 text-white': props.name === 'dragon',
      'bg-slate-400': props.name === 'steel',
      'bg-rose-200': props.name === 'fairy'
    }"
  >
    {{ capitalize(props.name ?? '') }}
  </span>
</template>
