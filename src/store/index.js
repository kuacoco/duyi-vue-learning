import { createStore } from 'vuex'
import banner from './banner'
import setting from './setting'
import about from './about'

const store = createStore({
  modules: {
    banner,
    setting,
    about
  },
  strict: true
})

export default store
