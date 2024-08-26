import { getAbout } from '@/api/about.js'

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: ''
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
      const res = await getAbout()
      commit('setData', res)
      commit('setLoading', false)
    }
  }
}
