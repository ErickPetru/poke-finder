<script setup>
import IconSearch from '@/assets/icons/search.svg?component'

const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

// To serve as the instance of the <input> element `ref`.
const inputElement = $ref(null)

function updateModelValue() {
  emit('update:modelValue', inputElement.value)
}
</script>

<template>
  <div class="relative">
    <input
      ref="inputElement"
      :value="props.modelValue"
      placeholder="What do you look for?"
      required
      class="w-full h-10 px-2 py-1.5 rounded-sm font-normal text-base placeholder:text-neutral-400 bg-white/70 border border-black/5 border-b-black/40 outline outline-2 outline-offset-1 outline-transparent focus-visible:outline-black hover:bg-neutral-100/70 valid:border-b-2 valid:border-b-teal-900 transition-all"
      @keyup.enter="updateModelValue"
    />

    <button
      class="absolute right-1 top-1 w-8 h-8 rounded grid place-items-center bg-white/0 hover:bg-neutral-900/5 active:bg-neutral-700/5 active:text-black/60 outline outline-2 -outline-offset-1 outline-transparent focus-visible:outline-black transition-all"
      @click="updateModelValue"
    >
      <IconSearch class="w-4 h-4" />
      <span class="sr-only">Search</span>
    </button>
  </div>
</template>
