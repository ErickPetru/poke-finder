<script setup>
import IconHeartFilled from '@/assets/icons/heart-filled.svg?component'
import IconHeartOutline from '@/assets/icons/heart-outline.svg?component'
import { useLikesStore } from '@/stores/likes'

const props = defineProps({ name: String })

// Use global Pinia store to ready likes information.
const likesStore = useLikesStore()

// Computed to reactively verify if the name is liked.
const isLiked = $computed(() => {
  return likesStore.likes.includes(props.name)
})

// Call the store appropriate method to like or unlike the name.
function toggleLike() {
  if (isLiked) {
    likesStore.unlike(props.name)
  } else {
    likesStore.like(props.name)
  }
}
</script>

<template>
  <button
    class="w-8 h-8 rounded grid place-items-center bg-white/0 hover:bg-neutral-900/5 active:bg-neutral-700/5 active:text-black/60 outline outline-2 -outline-offset-1 outline-transparent focus-visible:outline-black transition-all"
    :title="isLiked ? 'Remove favorite' : 'Set as favorite'"
    @click.stop.prevent="toggleLike"
  >
    <component
      :is="isLiked ? IconHeartFilled : IconHeartOutline"
      id="heart"
      class="w-6 h-6 transition-all"
      :class="{ 'is-liked': isLiked, 'text-black/40': !isLiked }"
    />
  </button>
</template>

<style scoped>
.is-liked:deep(path) {
  @apply stroke-current stroke-2 fill-red-500;
}
</style>
