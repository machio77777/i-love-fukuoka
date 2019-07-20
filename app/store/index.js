export const strict = false

export const state = () => ({
  companys : [],
  company : null,
  targetData : null,
  index : null
})

export const getters = {
  companys : (state) => state.companys,
  company : (state) => state.company,
  targetData : (state) => state.targetData,
  index : (state) => state.index
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
  }
}

export const actions = {
  async fetchCompanys({ commit }) {
    const companys = await this.$axios.$get(`companys.json`)
    commit('setCompanys', { companys })
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
    const companys = await this.$axios.$get(`/companys.json?`)
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
    const index = null
    commit('setCompany', { company })
    commit('setIndex', { index })
  }
}