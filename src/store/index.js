import { createStore } from 'vuex'
import banner from './banner'
import setting from './setting'

const store = createStore({
  modules: {
    banner,
    setting
  },
  strict: true
})

export default store
