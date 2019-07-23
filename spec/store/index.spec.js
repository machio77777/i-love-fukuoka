import Vuex from 'vuex'
import index from '../../app/store'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })
  
  describe('actions', () => {
    test('fetchCompanys', () => {
      expect(store.getters['companys']).toStrictEqual([])
      // 確認観点はactionsが呼び出され、storeが更新されることの担保.
      // mockの作成が必要(https://qiita.com/rhistoba/items/6e90e2c51e8ad1875ac0)
      //store.dispatch('fetchCompanys')
      //expect(store.getters['companys']).toStrictEqual([])
    })
  })
})