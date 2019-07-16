<template>
  <div>
    <TheHeader />
    <nuxt class="container" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>