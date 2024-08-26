import { getProjects } from '@/api/project'

export default {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
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
      if (state.data.length || state.loading) {
        return
      }

      commit('setLoading', true)
      const res = await getProjects()
      commit('setData', res)
      commit('setLoading', false)
    }
  }
}
