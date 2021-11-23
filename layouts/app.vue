<template>
  <div class="app-container w-screen text-base lg:text-xl">
    <Header />
    <Mail />
    <section class="page--container w-screen">
      <div class="page--content">
        <Nuxt />
      </div>
    </section>
    <Social />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead()
  },
}
</script>

<style lang="scss" scoped>

// @media only screen and (max-width: $medium) and (min-width: calc($tablet + 1px)) {
//   .page--container {
//     width: 80vw;
//     margin-left: 10vw;
//     border: solid green !important;
//     .page--content {
//       width: 80vw;
//     }
//   }
// }

// @media only screen and (max-width: $tablet) and (min-width: clac($mobile + 1px)) {
//   .page--content {
//     width: 70vw !important;
//   }
//   .page--container {
//     border: solid yellow !important;
//   }
// }
</style>
