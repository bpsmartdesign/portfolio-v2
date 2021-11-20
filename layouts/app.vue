<template>
  <div
    class="app-container h-screen w-screen overflow-hidden text-base lg:text-xl"
  >
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
  head() {
    return this.$nuxtI18nHead()
  },
}
</script>

<style lang="scss" scoped>
$bg: #0a192f;
$bg--dark: #091320;
$tablet: 768px;
$mobile: 640px;
.page--container {
  position: absolute;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 0;
  max-width: 100vw;
  height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: $bg--dark;

  &::-webkit-scrollbar {
    width: 8px !important;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: $bg !important;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: $bg--dark !important;
    border-radius: 0.5rem;
  }

  .page--content {
    width: 60vw;
    max-height: 100%;
  }
}

@media (max-width: $tablet) {
  .page--content {
    width: 70vw !important;
  }
}

@media (max-width: $mobile) {
  .page--content {
    width: 90vw !important;
  }
}
</style>
