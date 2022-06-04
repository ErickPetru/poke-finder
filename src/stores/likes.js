import { defineStore } from 'pinia'

export const useLikesStore = defineStore('likes', {
  persist: true,

  state() {
    return { likes: [] }
  },

  actions: {
    like(name) {
      this.likes.push(name)
    },

    unlike(name) {
      this.likes = this.likes.filter((like) => like !== name)
    }
  }
})
