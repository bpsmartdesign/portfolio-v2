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
    <div class="flex items-center">
      <a href="https://t.me/bpsmartdesign" class="bp-btn px-3 py-2"
        ><font-awesome-icon :icon="['fab', 'telegram']"
      /></a>
      <button class="bp-btn px-4 py-3 mx-3">
        <a :href="`mailto:${mail}?subject= Contact from : Portfolio V2`">
          {{ $t('contact.hello') }}
        </a>
      </button>
      <a href="https://wa.me/+237670331580" class="bp-btn px-3 py-2"
        ><font-awesome-icon :icon="['fab', 'whatsapp']"
      /></a>
    </div>
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
