<template>
  <div class="contact--container">
    <h4 class="subtitle uTxt my-3">
      <span class="text-base uTxt font-thin">04.</span> 
      What's next ?
    </h4>
    <h3 class="font-black text-4xl md:text-6xl cTitle text-center">Get in touch</h3>
    <p class="my-8 leading-relaxed text-center font-thin">
      I’m interested in freelance and remote opportunities – especially ambitious or large projects. However, if you have other request, question or just want to say hi, I’ll try my best to get back to you!
    </p>
    <button class="bp-btn px-4 py-3">
      <a :href="`mailto:${mail}?subject= Contact from : Portfolio V2`">
        Say Hello
      </a>
    </button>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data () {
    return {
      mail: 'bpsmartdesign@hotmail.com'
    }
  },
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.contact')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  $color: #f26800;
  .contact--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
