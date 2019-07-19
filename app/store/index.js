
export const state = () => ({
  companys : [],
  company : [],
  index : ''
})

export const getters = {
  companys : (state) => state.companys,
  company : (state) => state.company,
  index : (state) => state.index
}

export const mutations = {
  setCompanys(state, { companys }) {
    state.companys = companys
  },
  setCompany(state, { company }) {
    state.company = company
  },
  setIndex(state, { index }) {
    state.index = index
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
    commit('setIndex', { index })
  },
  clearCompany({ commit }) {
    const company = []
    const index = ''
    commit('setCompany', { company })
    commit('setIndex', { index })
  },
  async registCompany({ commit }, { company }) {
    await this.$axios.$post(`/companys.json`, company)
  },
  async updateCompany({ commit }, { index, company }) {
    await this.$axios.$put(`/companys/${index}.json`, company)
  },
  async deleteCompany({ commit }, { index }) {
    await this.$axios.$delete(`/companys/${index}.json`)
    const companys = await this.$axios.$get(`/companys.json?`)
    commit('setCompanys', { companys })
  }
}