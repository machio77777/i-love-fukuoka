<template>
  <div id="company">
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
      <li class="column">給与.</li>
      <li><input id="salary" type="text" v-model=salary @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">賞与.</li>
      <li><input id="bonus" type="text" v-model=bonus @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">就業時間.</li>
      <li><input id="worktime" type="text" v-model=worktime @change="onChange"></li>
    </ul>
    <ul style="margin-bottom:10px;">
      <li class="column">福利厚生.</li>
      <li>
        <div><input class="welfare" type="text" v-model=welfare1 @change="onChange"></div>
        <div><input class="welfare" type="text" v-model=welfare2 @change="onChange"></div>
        <div><input class="welfare" type="text" v-model=welfare3 @change="onChange"></div>
        <div><input class="welfare" type="text" v-model=welfare4 @change="onChange"></div>
        <div><input class="welfare" type="text" v-model=welfare5 @change="onChange"></div>
      </li>
    </ul>
    <ul>
      <li class="column">業務内容.</li>
      <li><input id="job" type="text" v-model=job @change="onChange"></li>
    </ul>
    <ul>
      <li class="column">使われている技術.</li>
      <li><div><input id="usedSkillsSearch" type="text" v-model=usedSkillsSearch ref="usedSkillsSearch"></div></li>
      <li style="margin-left:10px;"><button type="button" @click="addSkill()">追 加</button></li>
    </ul>
    <ul>
      <li class="column"></li>
      <li>
        <div id="usedSkills" v-if="usedSkills.length !== 0">
          <div v-for="usedSkill in usedSkills" :key=usedSkill.key>
            <span>{{ usedSkill.key }}</span>
            <span @click="deleteSkill(usedSkill.key)">✖</span>
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
      salary: null,
      bonus: null,
      worktime: null,
      welfare1: null,
      welfare2: null,
      welfare3: null,
      welfare4: null,
      welfare5: null,
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
    if (this.company !== null) {
      this.init()
      this.createObject()
    }
  },
  methods: {
    init() {
      this.name = this.company.name
      this.link = this.company.link
      this.address = this.company.address
      this.salary = this.company.salary
      this.bonus = this.company.bonus
      this.worktime = this.company.worktime
      this.welfare1 = this.company.welfare1
      this.welfare2 = this.company.welfare2
      this.welfare3 = this.company.welfare3
      this.welfare4 = this.company.welfare4
      this.welfare5 = this.company.welfare5
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
        salary : this.salary,
        bonus : this.bonus,
        worktime : this.worktime,
        welfare1 : this.welfare1,
        welfare2 : this.welfare2,
        welfare3 : this.welfare3,
        welfare4 : this.welfare4,
        welfare5 : this.welfare5,
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
      if (this.usedSkillsSearch === null || this.usedSkillsSearch === '') {
        this.$refs.usedSkillsSearch.focus();
        return
      }
      if (this.usedSkills.find(item => item.key === this.usedSkillsSearch)) {
        this.usedSkillsSearch = ''
        this.$refs.usedSkillsSearch.focus();
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
      this.$refs.usedSkillsSearch.focus();
    },
    deleteSkill(skillKey) {
      for (let i in this.usedSkills) {
        if (this.usedSkills[i].key === skillKey) {
          this.usedSkills.splice(i, 1)
          this.createObject()
          break;
        }
      }
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
#salary {
  width: 450px;
}
#bonus {
  width: 450px;
}
#worktime {
  width: 450px;
}
.welfare {
  width: 500px;
  margin-bottom: 10px;
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
  background-color: #000000;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#usedSkills span {
  color: #ffffff;
}
.requiredSkill {
  width: 500px;
  margin-bottom: 10px;
}
.welcomedSkill {
  width: 500px;
  margin-bottom: 10px;
}
@media (max-width: 480px){
  .column {
    width: 70px;
    margin-right: 10px;
  }
  input {
    width: 220px !important;
  }
  #usedSkills {
    width: 270px;
    padding: 10px;
  }
}
</style>

