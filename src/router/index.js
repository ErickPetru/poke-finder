import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Pokemon = () => import('@/pages/Pokemon.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/:identifier', component: Pokemon }
  ]
})
