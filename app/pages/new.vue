<template>
  <div class="main-container">
    <div id="contents">
      <Company />
      <ul style="justify-content: center; margin-bottom:0px;">
        <li><button type="button" style="width:110px;" @click="regist">新 規 登 録</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Company from '~/components/pages/Company.vue'

export default {
  components: {
    Company
  },
  methods: {
    async regist() {
      await this.registCompany()
      this.$router.push(`/`)
    },
    ...mapActions(['registCompany'])
  }
}
</script>

<style scoped>
.main-container {
  padding: 30px 250px;
}
#contents {
  margin: 10px;
  padding: 30px 30px;
  background-color: #ffffff;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
ul {
  display: flex;
  margin-bottom: 20px;
}
</style>
