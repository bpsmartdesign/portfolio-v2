<template>
  <div class="contact--container">
    <h4 class="subtitle uTxt my-3">
      <span class="text-base uTxt font-thin">04.</span>
      {{ $t('contact.title') }}
    </h4>
    <h1 class="font-black text-4xl md:text-6xl cTitle text-center">
      {{ $t('contact.main-title') }}
    </h1>
    <p class="my-8 leading-relaxed text-center font-thin">
      {{ $t('contact.text') }}
    </p>
    <button class="bp-btn px-4 py-3">
      <a :href="`mailto:${mail}?subject= Contact from : Portfolio V2`">
        {{ $t('contact.hello') }}
      </a>
    </button>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      mail: 'bpsmartdesign@hotmail.com',
    }
  },
  head() {
    return {
      title: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
        'menu.contact'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.meta.description'),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
            'menu.contact'
          )}`,
        },
        { hid: 'og:url', name: 'og:url', content: this.localePath('/contact') },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$color: #f26800;
.contact--container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  p {
    width: 60%;
  }

  .divider {
    width: 7%;
    height: 1px;
    background-color: $color;
  }
}
</style>
