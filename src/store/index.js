import { createStore } from 'vuex'
import banner from './banner'

const store = createStore({
  modules: {
    banner
  },
  strict: true
})

export default store
