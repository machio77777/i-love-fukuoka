<template>
  <div id="list" class="item-contents">
    <div v-for="(company, index) in companys" :key="company.id">
      <div class="list-contents">
        <div class="editCompany button" @click="editData(index)">編 集</div>
        <div class="button" @click="deleteData(index)">削 除</div>
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
      this.itemLoading = true
      await this.fetchCompanys()
      this.clearCompany()
      this.itemLoading = false
    },
    async detailData(index) {
      this.fetchCompany({ index : index })
    },
    async editData(index) {
      this.fetchCompany({ index : index })
      this.$router.push(`/edit`)
    },
    async deleteData(index) {
      this.itemLoading = true
      await this.deleteCompany({ index : index })
      this.clearCompany()
      this.itemLoading = false
    },
    ...mapActions(['fetchCompanys', 'fetchCompany', 'deleteCompany', 'clearCompany'])
  }
}
</script>

<style scoped>
#list {
  width: 35vw;
  min-height: 60vh;
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
.editCompany {
  background-color: #6495ed;
}
.company-link {
  color: #6495ed;
}
#company-link:hover {
  color: #ff69b4;
}
</style>
