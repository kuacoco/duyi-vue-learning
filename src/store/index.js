import { createStore } from 'vuex'
import banner from './banner'
import setting from './setting'
import about from './about'
import project from './project'

const store = createStore({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true
})

export default store
