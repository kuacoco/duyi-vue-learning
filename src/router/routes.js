import 'nprogress/nprogress.css'
import { start, done, configure } from 'nprogress'
import NotFound from '@/views/NotFound.vue'

configure({
  trickleSpeed: 20,
  showSpinner: false
})

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start()
    if (process.env.NODE_ENV === 'development') {
      await delay(2000)
    }
    const comp = await pageCompResolver()
    done()
    return comp
  }
}

const routes = [
  {
    name: 'home',
    path: '/',
    meta: { title: '首页' },
    component: getPageComponent(() => import('@/views/Home/index.vue'))
  },
  {
    name: 'about',
    path: '/about',
    meta: { title: '关于我' },
    component: getPageComponent(() => import('@/views/About/index.vue'))
  },
  {
    name: 'blog',
    path: '/blog',
    meta: { title: '文章' },
    component: getPageComponent(() => import('@/views/Blog/index.vue'))
  },
  {
    name: 'blogCategory',
    path: '/blog/cate/:categoryId',
    meta: { title: '文章' },
    component: getPageComponent(() => import('@/views/Blog/index.vue'))
  },
  {
    name: 'blogDetail',
    path: '/blog/:id',
    meta: { title: '文章详情' },
    component: getPageComponent(() => import('@/views/Blog/index.vue'))
  },
  {
    name: 'message',
    path: '/message',
    meta: { title: '留言板' },
    component: getPageComponent(() => import('@/views/Message/index.vue'))
  },
  {
    name: 'project',
    path: '/project',
    meta: { title: '项目&详情' },
    component: getPageComponent(() => import('@/views/Project/index.vue'))
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

export default routes
