<template>
  <div id="nav-drawer">
    <input id="nav-input" type="checkbox" class="nav-unshown">
    <label id="nav-open" for="nav-input"><span></span></label>
    <label class="nav-unshown" id="nav-close" for="nav-input"></label>
    <div id="nav-content">
      <div v-for="(company, index) in companys" :key="company.id">
        <div id="company-link" class="company-link" @click="detailData(index)">{{ company.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapGetters({'companys' : 'companys'})
  },
  methods: {
    async init() {
      await this.fetchCompanys()
      this.clearCompany()
    },
    async detailData(index) {
      this.fetchCompany({ index : index })
    },
    ...mapActions(['fetchCompanys', 'fetchCompany', 'clearCompany'])
  }
}
</script>

<style scoped>
/*ヘッダーまわりはサイトに合わせて調整してください*/
template {
  padding:10px;
  background: skyblue;
}
#nav-drawer {
  display: none;
}
/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}
/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}
/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}
/*閉じる用の薄黒カバー*/
#nav-close {
  display: none;/*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0;/*全体に広がるように*/
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}
/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/*最前面に*/
  width: 60vw;/*右側に隙間を作る（閉じるカバーを表示）*/
  max-width: 330px;/*最大幅（調整してください）*/
  height: 100vh;
  background: #fff;/*背景色*/
  transition: .3s ease-in-out;/*滑らかに表示*/
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/*左に隠しておく*/
  padding: 20px 10px;
}
/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close {
  display: block;/*カバーを表示*/
  opacity: .5;
}
#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/*中身を表示（右へスライド）*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
.company-link {
  padding : 5px 0;
}
@media (max-width: 480px){
  #nav-drawer {
    display: inline;
    position: relative;
  }
}
</style>
