<template>
  <div class="main-container">
    <div id="search" class="item-contents">検索 + 新規登録</div>
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" class="item">
      <div id="list" class="item-contents">
        <div v-for="company in companys" :key="company.id">
          <div class="list-contents">
            <div class="button" @click="deleteCompany(company.id)">削除</div>
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
            <img :src=skill.path />
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
    detailCompany(companyId) {
      const idx = companyId - 1
      this.company = this.companys[idx]
    },
    async deleteCompany(companyId) {
      alert('Hello World')
    },
    ...mapActions(['fetchCompanys', 'fetchCompany'])
  }
}
</script>

<style scoped>
.main-container {
  padding: 30px 100px;
  background-color: #f0f8ff;
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
.value img {
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
