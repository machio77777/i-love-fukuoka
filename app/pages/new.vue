<template>
  <div class="main-container">
    <div id="contents">
      <ul>
        <li class="column">会社名.</li>
        <li><input id="name" type="text" v-model=name placeholder="株式会社○○○○"></li>
      </ul>
      <ul>
        <li class="column">リンク.</li>
        <li><input id="link" type="text" v-model=link placeholder="https://xxxx.com"></li>
      </ul>
      <ul>
        <li class="column">住所.</li>
        <li><input id="address" type="text" v-model=address placeholder="〒123-4567 東京都○○○区○○○町 1-2-3"></li>
      </ul>
      <ul>
        <li class="column">業務内容.</li>
        <li><input id="job" type="text" v-model=job placeholder="WEB制作会社"></li>
      </ul>
      <ul>
        <li class="column">使われている技術.</li>
        <li>
          <div><input id="usedSkillsSearch" type="text" v-model=usedSkillsSearch placeholder="Java"></div>
        </li>
        <li style="margin-left:10px;"><button type="button" @click="addSkill()">追 加</button></li>
      </ul>
      <ul>
        <li class="column"></li>
        <li>
          <div id="usedSkills" v-if="usedSkills.length !== 0">
            <div v-for="usedSkill in usedSkills" :key=usedSkill.key>
              {{ usedSkill.key }}
            </div>
          </div>
        </li>
      </ul>
      <ul style="margin-bottom:10px;">
        <li class="column">求められるスキル.</li>
        <li>
          <div><input class="requiredSkill" type="text" v-model=requiredSkill1 placeholder="Javaによる開発経験"></div>
          <div><input class="requiredSkill" type="text" v-model=requiredSkill2 placeholder="Webアプリケーションの開発経験"></div>
          <div><input class="requiredSkill" type="text" v-model=requiredSkill3 placeholder="データベースを用いた開発経験"></div>
          <div><input class="requiredSkill" type="text" v-model=requiredSkill4 placeholder="Linux/Unixの知識・経験"></div>
          <div><input class="requiredSkill" type="text" v-model=requiredSkill5 placeholder="チームメンバーで協力して作業を行うことが好きな方"></div>
        </li>
      </ul>
      <ul style="margin-bottom:10px;">
        <li class="column">歓迎されるスキル.</li>
        <li>
          <div><input class="welcomedSkill" type="text" v-model=welcomedSkill1 placeholder="Web認証技術 (OAuth、Open ID Connect、SAML、2段階認証など) の知識・経験"></div>
          <div><input class="welcomedSkill" type="text" v-model=welcomedSkill2 placeholder="Web API作成の知識・経験"></div>
          <div><input class="welcomedSkill" type="text" v-model=welcomedSkill3 placeholder="セキュリティに関する知識・経験"></div>
          <div><input class="welcomedSkill" type="text" v-model=welcomedSkill4 placeholder="オープンソースコミュニティ等での活動経験"></div>
          <div><input class="welcomedSkill" type="text" v-model=welcomedSkill5 placeholder="英語によるコミュニケーション（主に読み書き）が可能な方"></div>
        </li>
      </ul>
      <ul style="justify-content: center; margin-bottom:0px;">
        <li><button type="button" style="width:110px;" @click="regist">新 規 登 録</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      name : '',
      link : '',
      address : '',
      job : '',
      usedSkillsSearch : '',
      usedSkills : [],
      requiredSkill1 : '',
      requiredSkill2 : '',
      requiredSkill3 : '',
      requiredSkill4 : '',
      requiredSkill5 : '',
      welcomedSkill1 : '',
      welcomedSkill2 : '',
      welcomedSkill3 : '',
      welcomedSkill4 : '',
      welcomedSkill5 : ''
    }
  },
  methods: {
    async regist() {
      const request = {
        name : this.name,
        link : this.link,
        address : this.address,
        job : this.job,
        usedSkills : this.usedSkills,
        requiredSkill1 : this.requiredSkill1,
        requiredSkill2 : this.requiredSkill2,
        requiredSkill3 : this.requiredSkill3,
        requiredSkill4 : this.requiredSkill4,
        requiredSkill5 : this.requiredSkill5,
        welcomedSkill1 : this.welcomedSkill1,
        welcomedSkill2 : this.welcomedSkill2,
        welcomedSkill3 : this.welcomedSkill3,
        welcomedSkill4 : this.welcomedSkill4,
        welcomedSkill5 : this.welcomedSkill5
      }
      await this.registCompany({ company : request })
      this.$router.push(`/`)
    },
    addSkill() {
      if (this.usedSkillsSearch === '') {
        return
      }
      if (this.usedSkills.find(item => item === this.usedSkillsSearch)) {
        this.usedSkillsSearch = ''
        return
      }
      const skillLower = this.usedSkillsSearch.toLowerCase()
      const params = { key : this.usedSkillsSearch, path : require(`../assets/img/${skillLower}.svg`) }
      this.usedSkills.push(params)
      this.usedSkillsSearch = ''
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
.column {
  width: 160px;
}
#link {
  width: 300px;
}
#address {
  width: 450px;
}
#usedSkills {
  display: flex;
  flex-wrap: wrap;
  width: 485px;
  padding: 10px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  background-color: #f0f8ff;
}
#usedSkills div {
  margin: 3px;
  padding: 7px 10px;
  font-size: 12px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.requiredSkill {
  width: 500px;
  margin-bottom: 10px;
}
.welcomedSkill {
  width: 500px;
  margin-bottom: 10px;
}
</style>
