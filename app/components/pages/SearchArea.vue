<template>
  <div id="search" class="item-contents">
    <div>
      <ul>
        <li style="width:220px;"><input type="text" value="" placeholder="会社名を入力してください" /></li>
        <li style="width:80px;"><div id="searchCompany" class="button" @click="searchCompany()">検 索</div></li>
        <li><p style="padding: 3px;">※ 会社名を前方一致で検索.</p></li>
      </ul>
      <nuxt-link to="/new"><div id="registCompany" class="button">新 規 登 録 へ</div></nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    async searchCompany() {
      // TODO 検索処理の実装が必要
      this.itemLoading = true
      alert('Coming Soon....')
      this.itemLoading = false
    },
    //...mapActions([''])
  }
}
</script>

<style scoped>
#search {
  padding: 20px 30px;
}
#search ul {
  display: flex;
  margin-bottom: 25px;
}
#searchCompany {
  width: 60px;
  background-color: #6495ed;
}
#registCompany {
  width: 120px;
  background-color: #6495ed;
}
</style>