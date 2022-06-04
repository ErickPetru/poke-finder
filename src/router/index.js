import { createRouter, createWebHistory } from 'vue-router'

// Configure the components as Promises for async loading.
const Home = () => import('@/pages/Home.vue')
const Pokemon = () => import('@/pages/Pokemon.vue')

export const router = createRouter({
  // Use native Web History API to track route changes.
  history: createWebHistory(),

  // Configure all available routes.
  routes: [
    { path: '/', component: Home },
    { path: '/:identifier', component: Pokemon }
  ]
})
