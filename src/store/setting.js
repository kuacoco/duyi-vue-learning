import { getSetting } from '@/api/setting.js'

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: null
  }),
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchData({ commit, state }) {
      if (state.data || state.loading) {
        return
      }

      commit('setLoading', true)
      const res = await getSetting()
      commit('setData', res)
      commit('setLoading', false)

      if (res.favicon) {
        // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
        let link = document.querySelector(`link[rel='shortcut icon']`)
        if (link) {
          return
        }

        link = document.createElement('link')
        link.rel = 'shortcut icon'
        link.type = 'images/x-icon'
        link.href = res.favicon

        document.head.appendChild(link)
      }
    }
  }
}
