// import './assets/main.css'
import './styles/global.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { showMessage } from '@/utils'
import '@/mock'
import loading from '@/directives/loading.js'
import lazy from '@/directives/lazy.js'
import mitt from 'mitt'
import store from './store'

const app = createApp(App)
app.provide('showMessage', showMessage)
app.provide('eventBus', mitt())
app.use(store)
app.use(router).mount('#app')
app.directive('loading', loading)
app.directive('lazy', lazy)
