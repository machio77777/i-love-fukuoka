<template>
  <div>
    <ul>
      <li class="column">会社名.</li>
      <li><input id="name" type="text" v-model=name @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">リンク.</li>
      <li><input id="link" type="text" v-model=link @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">住所.</li>
      <li><input id="address" type="text" v-model=address @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">業務内容.</li>
      <li><input id="job" type="text" v-model=job @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">使われている技術.</li>
      <li><div><input id="usedSkillsSearch" type="text" v-model=usedSkillsSearch></div></li>
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
        <div><input class="requiredSkill" type="text" v-model=requiredSkill1 @change="onChange"></div>
        <div><input class="requiredSkill" type="text" v-model=requiredSkill2 @change="onChange"></div>
        <div><input class="requiredSkill" type="text" v-model=requiredSkill3 @change="onChange"></div>
        <div><input class="requiredSkill" type="text" v-model=requiredSkill4 @change="onChange"></div>
        <div><input class="requiredSkill" type="text" v-model=requiredSkill5 @change="onChange"></div>
      </li>
    </ul>
    <ul style="margin-bottom:10px;">
      <li class="column">歓迎されるスキル.</li>
      <li>
        <div><input class="welcomedSkill" type="text" v-model=welcomedSkill1 @change="onChange"></div>
        <div><input class="welcomedSkill" type="text" v-model=welcomedSkill2 @change="onChange"></div>
        <div><input class="welcomedSkill" type="text" v-model=welcomedSkill3 @change="onChange"></div>
        <div><input class="welcomedSkill" type="text" v-model=welcomedSkill4 @change="onChange"></div>
        <div><input class="welcomedSkill" type="text" v-model=welcomedSkill5 @change="onChange"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      name : null,
      link : null,
      address : null,
      job : null,
      usedSkillsSearch : null,
      usedSkills : [],
      requiredSkill1 : null,
      requiredSkill2 : null,
      requiredSkill3 : null,
      requiredSkill4 : null,
      requiredSkill5 : null,
      welcomedSkill1 : null,
      welcomedSkill2 : null,
      welcomedSkill3 : null,
      welcomedSkill4 : null,
      welcomedSkill5 : null
    }
  },
  computed: {
    ...mapGetters({ 'company' : 'company' })
  },
  mounted() {
    // 更新時のみstore値を反映
    if (this.company !== null) {
      this.init()
      this.createObject()
    }
  },
  methods: {
    init() {
      // TODO ブラウザ更新時にセッションストレージへの保存
      // (参考) https://pizzamanz.net/web/vue/vuex-persistedstate/
      this.name = this.company.name
      this.link = this.company.link
      this.address = this.company.address
      this.job = this.company.job
      this.usedSkillsSearch = this.company.usedSkillsSearch
      this.usedSkills = (this.company.usedSkills === undefined) ? [] : this.company.usedSkills
      this.requiredSkill1 = this.company.requiredSkill1
      this.requiredSkill2 = this.company.requiredSkill2
      this.requiredSkill3 = this.company.requiredSkill3
      this.requiredSkill4 = this.company.requiredSkill4
      this.requiredSkill5 = this.company.requiredSkill5
      this.welcomedSkill1 = this.company.welcomedSkill1
      this.welcomedSkill2 = this.company.welcomedSkill2
      this.welcomedSkill3 = this.company.welcomedSkill3
      this.welcomedSkill4 = this.company.welcomedSkill4
      this.welcomedSkill5 = this.company.welcomedSkill5
    },
    createObject() {
      const targetData = {
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
      this.createTargetData({ company : targetData })
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
      let path = null
      try {
        path = require(`../../assets/img/${skillLower}.svg`)
      } catch(e) {
        path = null
      }
      const params = { key : this.usedSkillsSearch, path : path }
      this.usedSkills.push(params)
      this.usedSkillsSearch = ''
      this.createObject()
    },
    onChange() {
      this.createObject()
    },
    ...mapActions(['createTargetData'])
  }
}
</script>

<style scoped>
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

