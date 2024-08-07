// import './assets/main.css'
import './styles/global.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { showMessage } from '@/utils'

import '@/mock'
import { getBanner } from '@/api/banner.js'

const app = createApp(App)
app.config.globalProperties.$showMessage = showMessage
app.use(router).mount('#app')

getBanner().then((res) => {
  console.log(res)
})
