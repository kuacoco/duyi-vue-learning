import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
import Blog from '@/views/Blog/index.vue'
import BlogDetail from '@/views/Blog/Detail.vue'
import Message from '@/views/Message/index.vue'
import Project from '@/views/Project/index.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'blog', path: '/blog', component: Blog },
  { name: 'blogCategory', path: '/blog/cate/:categoryId', component: Blog },
  { name: 'blogDetail', path: '/blog/:id', component: BlogDetail },
  { name: 'message', path: '/message', component: Message },
  { name: 'project', path: '/project', component: Project }
]

export default routes
