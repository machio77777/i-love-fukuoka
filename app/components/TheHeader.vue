<template>
  <div id="header-container">
    <ul id="header">
      <li><nuxt-link to="/">I Love Fukuoka</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
#header-container {
  padding: 15px 0;
  background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8));
  animation: huerotator 5s infinite alternate;
}
@keyframes huerotator {
  0% {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
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
</style>