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
    <div v-if="new Date().getMonth() === 11" class="guirlande--container">
      <div class="guirlande guirlande1"></div>
      <div class="guirlande guirlande2"></div>
      <div class="guirlande guirlande3"></div>
    </div>
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
  .guirlande {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 150px;
    z-index: 10;
    left: 0;

    &.guirlande1 {
      height: 120px;
      background: url('/guirlandes/guirlande1.png') repeat-x 300% top;
      top: -23px;
    }
    &.guirlande2 {
      height: 120px;
      background: url('/guirlandes/guirlande2.png') repeat-x 70% top;
      top: -71px;
    }
    &.guirlande3 {
      height: 120px;
      background: url('/guirlandes/guirlande3.png') repeat-x 10% top;
      top: -50px;
    }
  }
</style>
