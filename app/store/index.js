
export const state = () => ({
  companys : [],
  company : []
})

export const getters = {
  companys : (state) => state.companys,
  company : (state) => state.company
}

export const mutations = {
  setCompanys(state, { companys }) {
    state.companys = companys
  },
  setCompany(state, { company }) {
    state.company = company
  }
}

export const actions = {
  async fetchCompanys({ commit }) {
    const companys = await this.$axios.$get(`/companys.json?`)
    commit('setCompanys', { companys })
  },
  fetchCompany({ commit }, { index }) {
    const company = this.getters['companys'][index]
    commit('setCompany', { company })
  },
  clearCompany({ commit }) {
    const company = []
    commit('setCompany', { company })
  },
  async registCompany({ commit }, { company }) {
    console.log(company)
    await this.$axios.$post(`/companys.json`, company)
  },
  async deleteCompany({ commit }, { index }) {
    await this.$axios.$delete(`/companys/${index}.json`)
    const companys = await this.$axios.$get(`/companys.json?`)
    commit('setCompanys', { companys })
  }
}