
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
    const companys = [
      { 
        id : 1, 
        name : 'ヌーラボ', 
        address : '〒810-0041 福岡県福岡市中央区大名1-8-6 HCC BLD',
        job : '自社サービス(backlog/cacoo/typetalk)',
        skills : [
          { key : 'Java',     path : require('../assets/img/java.svg') },
          { key : 'Haxe',     path : require('../assets/img/haxe.svg') },
          { key : 'Spring',   path : require('../assets/img/spring.svg') },
          { key : 'MySQL',    path : require('../assets/img/mysql.svg') },
          { key : 'Git',      path : require('../assets/img/git.svg') },
          { key : 'AWS',      path : require('../assets/img/aws.svg') },
          { key : 'Gradle',   path : require('../assets/img/gradle.svg') },
          { key : 'Ansible',  path : require('../assets/img/ansible.svg') },
          { key : 'Knockout', path : require('../assets/img/knockout.svg') },
          { key : 'Jenkins',   path : require('../assets/img/jenkins.svg') }],
        requires: [
          'Javaによる開発経験',
          'Webアプリケーションの開発経験',
          'データベースを用いた開発経験',
          'チームメンバーで協力して作業を行うことが好きな方'
        ],
        welcomes : [
          'Web認証技術 (OAuth、Open ID Connect、SAML、2段階認証など) の知識・経験',
          'Web API作成の知識・経験',
          'セキュリティに関する知識・経験',
          'Linux/Unixの知識・経験',
          'オープンソースコミュニティ等での活動経験',
          '英語によるコミュニケーション（主に読み書き）が可能な方'
        ],
        link : 'https://nulab.com/ja/'
      },
      { 
        id : 2, 
        name : 'しくみデザイン', 
        address : '〒812-0011 福岡市博多区博多駅前4-8-15博多鳳城ビル401',
        job : 'WEB制作会社',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://www.shikumi.co.jp/'
      },
      { 
        id : 3, 
        name : 'GMOペパボ', 
        address : '〒810-0001 福岡県福岡市中央区天神2丁目7番21号 天神プライム',
        job : '自社サービス(ホスティング/EC支援/ハンドメイド)',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://pepabo.com/'
      },
      { 
        id : 4, 
        name : 'エニセンス', 
        address : '〒810-0001 福岡県福岡市中央区天神1-15-2 第6明星ビル8F',
        job : 'WEB制作会社',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://anysense.co.jp/'
      },
      { 
        id : 5, 
        name : 'キャッチアップ', 
        address : '〒810-0041 福岡市中央区大名 2-11-25 新栄ビル4F',
        job : 'WEB制作会社(baserCMS)',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://catchup.co.jp/'
      },
      { 
        id : 6, 
        name : 'さくらインターネット', 
        address : '〒810-0042 福岡県福岡市中央区赤坂1-12-15 読売福岡ビル 7F',
        job : '自社サービス(ホスティング)',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://www.sakura.ad.jp/corporate/'
      },
      { 
        id : 7, 
        name : 'Yahoo JAPAN', 
        address : '〒810-0801 福岡県福岡市博多区中洲5-3-8 アクア博多 6階',
        job : '自社サービス(WEBサービス)',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://about.yahoo.co.jp/'
      },
      { 
        id : 8, 
        name : 'ペンシル', 
        address : '〒810-0001 福岡市中央区天神1丁目3-38 天神121ビル5Ｆ',
        job : 'WEB制作会社',
        skills : [],
        requires: [],
        welcomes : [],
        link : 'https://www.pencil.co.jp/'
      },
    ]
    commit('setCompanys', { companys })
  },
  async registCompany({ commit }, { company }) {
    console.log(company)
  },
  async deleteCompany({ commit }, { companyId }) {
  }
}