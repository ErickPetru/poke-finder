import { defineStore } from 'pinia'

export const useLikesStore = defineStore('likes', {
  // Enable store persistence to `localStorage`.
  persist: true,

  state() {
    // Global stated shared between components.
    return { likes: [] }
  },

  actions: {
    // Action to insert a name in the `likes` array.
    like(name) {
      this.likes.push(name)
    },

    // Action to remove a name of the `likes` array.
    unlike(name) {
      this.likes = this.likes.filter((like) => like !== name)
    }
  }
})
