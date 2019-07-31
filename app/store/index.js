export const strict = false

export const state = () => ({
  companys : [],
  company : null,
  targetData : null,
  index : null,
  loading : true
})

export const getters = {
  companys : (state) => state.companys,
  company : (state) => state.company,
  targetData : (state) => state.targetData,
  index : (state) => state.index,
  loading : (state) => state.loading
}

export const mutations = {
  setCompanys(state, { companys }) {
    state.companys = companys
  },
  setCompany(state, { company }) {
    state.company = company
  },
  setTargetData(state, { targetData }) {
    state.targetData = targetData
  },
  setIndex(state, { index }) {
    state.index = index
  },
  setLoading(state, { loading }) {
    state.loading = loading
  }
}

export const actions = {
  async fetchCompanys({ commit }) {
    const companys = await this.$axios.$get(`companys.json`)
    commit('setCompanys', { companys })
    const loading = false
    commit('setLoading', { loading })
  },
  async registCompany({ commit }) {
    const targetData = this.getters['targetData']
    await this.$axios.$post(`/companys.json`, targetData)
  },
  async updateCompany({ commit }) {
    const targetData = this.getters['targetData']
    const index = this.getters['index']
    await this.$axios.$put(`/companys/${index}.json`, targetData)
  },
  async deleteCompany({ commit }, { index }) {
    await this.$axios.$delete(`/companys/${index}.json`)
    const companys = await this.$axios.$get(`/companys.json`)
    commit('setCompanys', { companys })
  },
  fetchCompany({ commit }, { index }) {
    const company = this.getters['companys'][index]
    commit('setCompany', { company })
    commit('setIndex', { index })
  },
  createTargetData({ commit }, { company }) {
    const targetData = company
    commit('setTargetData', { targetData })
  },
  clearCompany({ commit }) {
    const company = null
    const targetData = null
    const index = null
    commit('setCompany', { company })
    commit('setTargetData', { targetData })
    commit('setIndex', { index })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}