<template>
  <div
    class="app-container h-screen w-screen text-base lg:text-xl"
  >
    <Header />
    <Mail />
    <section class="page--container w-screen h-screen">
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
$bg: #0a192f;
$bg--dark: #091320;
$medium: 1024px;
$tablet: 768px;
$mobile: 640px;

.app-container {
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

}
.page--container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 90vw;
  margin-left: 5vw;
  margin-top: 100px;
  z-index: 0;
  height: calc(100vh - 110px);

  .page--content {
    width: 60vw;
    max-height: 100%;
  }
}

@media (max-width: $medium) {
  .page--container {
    width: 80vw;
    margin-left: 10vw;
    .page--content {
      width: 80vw;
    }
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
