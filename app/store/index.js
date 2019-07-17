
export const state = () => ({
  companys : []
})

export const getters = {
  companys : (state) => state.companys
}

export const mutations = {
  setCompanys(state, { companys }) {
    state.companys = companys
  }
}

export const actions = {
  async fetchCompanys({ commit }) {
    const companys = await this.$axios.$get(`/companys.json?`)
    commit('setCompanys', { companys })
  },
  async registCompany({ commit }, { company }) {
    await this.$axios.$post(`/companys.json`, company)
  }
}