import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ProfileView from '../views/ProfileView.vue'
import ReadView from '../views/ReadView.vue'
import TranslatorView from '../views/TranslatorView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/read',
      name: 'read',
      component: ReadView
    },
    {
      path: '/translate',
      name: 'translate',
      component: TranslatorView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
