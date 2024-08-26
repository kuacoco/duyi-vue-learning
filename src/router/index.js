import { createWebHistory, createRouter } from 'vue-router'
import routes from '@/router/routes.js'
import { titleController } from '@/utils/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
})

export default router
