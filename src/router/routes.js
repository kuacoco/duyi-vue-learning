import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'
import Blog from '@/views/Blog/index.vue'
import BlogDetail from '@/views/Blog/Detail.vue'
import Message from '@/views/Message/index.vue'
import Project from '@/views/Project/index.vue'

const routes = [
  { name: 'home', path: '/', meta: { title: '首页' }, component: Home },
  { name: 'about', path: '/about', meta: { title: '关于我' }, component: About },
  { name: 'blog', path: '/blog', meta: { title: '文章' }, component: Blog },
  {
    name: 'blogCategory',
    path: '/blog/cate/:categoryId',
    meta: { title: '文章' },
    component: Blog
  },
  { name: 'blogDetail', path: '/blog/:id', meta: { title: '文章详情' }, component: BlogDetail },
  { name: 'message', path: '/message', meta: { title: '留言板' }, component: Message },
  { name: 'project', path: '/project', meta: { title: '项目&详情' }, component: Project }
]

export default routes
