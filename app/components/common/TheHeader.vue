<template>
  <div id="header-container">
    <ul id="header">
      <li id="h-menu"><TheMenu/></li>
      <li><nuxt-link to="/">I Love Fukuoka.</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import TheMenu from '~/components/common/TheMenu.vue'

export default {
  components: {
    TheMenu
  }
}
</script>

<style scoped>
#header-container {
  position: fixed;
  margin: 0 auto;
  max-width: 1300px;
  width: 100vw;
  padding: 15px 0;
  background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8));
  animation: huerotator 5s infinite alternate;
}
#header li {
  display: inline-block;
  margin: 0 20px;
  font-weight: bold;
}
#header a {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 480px){
  #header li {
    margin: 0;
  }
  #header #h-menu {
    margin: 0 10px;
  }
}
</style>