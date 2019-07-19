<template>
  <div id="detail" class="item-contents" v-if="company.length !== 0">
    <div>
      <p class="column">◾️企業名</p>
      <p class="value">{{ company.name }}</p>
    </div>
    <div>
      <p class="column">◾️リンク先</p>
      <p class="value"><a :href=company.link target="_blank">{{ company.link }}</a></p>
    </div>
    <div>
      <p class="column">◾️住所</p>
      <p class="value">{{ company.address }}</p>
    </div>
    <div>
      <p class="column">◾️業務内容</p>
      <p class="value">{{ company.job }}</p>
    </div>
    <div>
      <p class="column">◾️使われている技術</p>
      <div class="skill" v-for="skill in company.usedSkills" :key=skill.key>
        <div class="value skill-img">
        <div style="text-align:center;"><img :src=skill.path /></div>
          <p>{{ skill.key }}</p>
        </div>
      </div>
    </div>
    <div>
      <p class="column">◾️求められるスキル</p>
      <p class="value">{{ company.requiredSkill1 }}</p>
      <p class="value">{{ company.requiredSkill2 }}</p>
      <p class="value">{{ company.requiredSkill3 }}</p>
      <p class="value">{{ company.requiredSkill4 }}</p>
      <p class="value">{{ company.requiredSkill5 }}</p>
    </div>
    <div>
      <p class="column">◾️歓迎されるスキル</p>
      <p class="value">{{ company.welcomedSkill1 }}</p>
      <p class="value">{{ company.welcomedSkill2 }}</p>
      <p class="value">{{ company.welcomedSkill3 }}</p>
      <p class="value">{{ company.welcomedSkill4 }}</p>
      <p class="value">{{ company.welcomedSkill5 }}</p>
    </div>
  </div>
  <div id="detail" class="item-contents" v-else>
    <p style="padding: 15px 0 0 15px;">会社名を選択してください!!</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({'company' : 'company'})
  },
}
</script>

<style scoped>
#detail {
  width: 50vw;
}
.column {
  margin: 10px;
  font-weight: bold;
}
.value {
  margin: 10px 10px 10px 20px;
  font-size: 13px;
}
.value div {
  margin: 0px !important;
}
.value div img {
  width: 30px;
  height: 30px;
}
.skill {
  display: inline-block;
  margin: 10px 5px 10px 15px;
}
.skill-img {
  margin: 0px !important;
}
.skill-img p {
  font-size: 10px;
  text-align: center;
}
</style>
