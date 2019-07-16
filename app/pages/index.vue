<template>
  <div class="main-container">
    <div id="search" class="item-contents">
      <div>
        <ul style="margin-bottom:25px; display:flex;">
          <li style="width:220px;"><input type="text" value="" placeholder="会社名を入力してください" /></li>
          <li style="width:80px;"><div id="searchCompany" @click="searchCompany()">検 索</div></li>
          <li><p style="padding: 3px;">※ 会社名を前方一致で検索.</p></li>
        </ul>
        <nuxt-link to="/new"><div id="registCompany">新 規 登 録 へ</div></nuxt-link>
      </div>
    </div>
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" class="item">
      <div id="list" class="item-contents">
        <div v-for="company in companys" :key="company.id">
          <div class="list-contents">
            <div class="editCompany" @click="editCompany(company.id)">編 集</div>
            <div class="button" @click="deleteCompany(company.id)">削 除</div>
            <div id="company-link" class="company-link" @click="detailCompany(company.id)">{{ company.name }}</div>
          </div>
        </div>
      </div>
      <div id="detail" class="item-contents" v-if="company.length!==0">
        <div class="column">◾️企業名</div>
        <div class="value">{{ company.name }}</div>
        <div class="column">◾️リンク先</div>
        <div class="value"><a :href=company.link target="_blank">{{ company.link }}</a></div>
        <div class="column">◾️住所</div>
        <div class="value">{{ company.address }}</div>
        <div class="column">◾️業務内容</div>
        <div class="value">{{ company.job }}</div>
        <div class="column" v-if="company.skills.length!==0">◾️使われている技術</div>
        <div v-for="skill in company.skills" :key=skill.key style="display:inline-block;">
          <div class="value skill-img">
            <div style="text-align:center;"><img :src=skill.path /></div>
            <p>{{ skill.key }}</p>
          </div>
        </div>
        <div class="column" v-if="company.requires.length!==0">◾️求められるスキル</div>
        <div v-for="require in company.requires" :key=require>
          <div class="value">・{{ require }}</div>
        </div>
        <div class="column" v-if="company.welcomes.length!==0">◾️歓迎されるスキル</div>
        <div v-for="welcome in company.welcomes" :key=welcome>
          <div class="value">・{{ welcome }}</div>
        </div>
      </div>
      <div id="detail" class="item-contents" v-else>
        <p>会社名を選択してください!!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading : false,
      mode : 1,
      company : []
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapGetters({'companys' : 'companys'})
  },
  methods: {
    async init() {
      this.itemLoading = true
      await this.fetchCompanys()
      this.itemLoading = false
    },
    async searchCompany() {
      this.itemLoading = true
      alert('Coming Soon....')
      this.itemLoading = false
    },
    async editCompany(companyId) {
      alert('Coming Soon....')
    },
    async detailCompany(companyId) {
      const idx = companyId - 1
      this.company = this.companys[idx]
    },
    async deleteCompany(companyId) {
      this.itemLoading = true
      alert('Coming Soon....')
      this.itemLoading = false
    },
    ...mapActions(['fetchCompanys', 'fetchCompany'])
  }
}
</script>

<style scoped>
.main-container {
  padding: 30px 70px;
}
.item-contents {
  margin: 10px;
  padding: 15px 10px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.item {
  display: flex;
}
#search {
  padding: 20px 30px;
}
#searchCompany {
  width: 60px;
  padding: 3px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: solid 1px #a9a9a9;
  background-color: #4682b4;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#registCompany {
  width: 120px;
  padding: 3px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: solid 1px #a9a9a9;
  background-color: #6495ed;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.editCompany {
  width: 50px;
  margin-bottom: 100px;
  padding: 3px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  border: solid 1px #a9a9a9;
  background-color: #6495ed;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#list {
  width: 35vw;
}
.list-contents {
  margin: 15px 0;
  padding-bottom: 15px;
  border-collapse:separate;
  border-spacing: 15px 0;
  border-bottom: solid 1px #c0c0c0;
}
.list-contents div {
  display:table-cell;
  vertical-align: middle;
}
#company-link:hover {
  color: #ff69b4;
}
.company-link {
  color: #6495ed;
}
#detail {
  width: 50vw;
}
#detail div {
  margin: 10px;
}
.column {
  font-weight: bold;
}
.value {
  font-size: 13px;
}
.value div {
  margin: 0px !important;
}
.value div img {
  width: 30px;
  height: 30px;
}
.skill-img {
  margin: 0px !important;
}
.skill-img p {
  font-size: 10px;
  text-align: center;
}
</style>
