<template>
  <div class="app-container h-screen w-screen overflow-hidden">
    <Header />
    <Social />
    <Mail />
    <section class="page--container w-screen h-screen">
      <div class="page--content">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return this.$nuxtI18nHead()
  }
}
</script>

<style lang="scss" scoped>
  .page--container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    max-width: 100vw;

    .page--content {
      width: 60vw;
      // border: solid;
    }
  }
</style>
