<template>
  <div id="footer-container">
    <p>copyright(c) 2019 Shintarou Tanaka</p>
  </div>
</template>

<style scoped>
#footer-container {
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
#footer-container {
  padding: 10px 0;
  text-align: center;
  background-color: #696969;
}
#footer-container p {
  color: #ffffff;
}
</style>