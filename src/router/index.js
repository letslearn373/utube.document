import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '../views/IntroductionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: IntroductionView
    },
    {
      path: '/quick-install',
      name: 'quick-install',
      component: () => import('../views/QuickInstallView.vue')
    },
    {
      path: '/video-service',
      name: 'video-service',
      component: () => import('../views/VideoServiceView.vue')
    },
    {
      path: '/storage-service',
      name: 'storage-service',
      component: () => import('../views/StorageServiceView.vue')
    },
    {
      path: '/process-service',
      name: 'process-service',
      component: () => import('../views/ProcessServiceView.vue')
    }
  ]
})

export default router
