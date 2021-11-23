<template>
  <div
    class="
      about--container
      flex
      items-center
      justify-center
      flex-wrap
      content-center
      py-6
      lg:flex lg:flex-nowrap
    "
  >
    <div class="about--text w-full lg:mr-10 lg:w-3/4">
      <MainTitle :title="$t('about.title')" num="0.1" />
      <p>
        {{ $t('about.intro') }} <span class="uTxtTa deco">BIYA Paul,</span>
        {{ $t('about.intro-me') }}
      </p>
      <p>{{ $t('about.intro-history') }}</p>
      <p>{{ $t('about.main-tech') }}</p>
      <ul class="list--tech list-inside">
        <li v-for="tech in mainTechno" :key="tech.id">
          <a class="ml-4" :href="tech.uri" target="blank"
            ><span class="deco uTxtTa">{{ tech.name }}</span></a
          >
        </li>
      </ul>
    </div>
    <div class="mt-12 w-full flex flex-nowrap items-center lg:w-1/3">
      <div class="about--detail w-2/3 lg:w-full max-w-xs">
        <img
          src="/me.webp"
          alt="bpsmartdesign"
          min-width="250px"
          min-height="250px"
          class="shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      mainTechno: [
        { name: 'Javascript (Es6 +)', uri: 'https://www.javascript.com/' },
        { name: 'Vue Js', uri: 'https://vuejs.org/' },
        { name: 'React', uri: 'https://reactjs.org/' },
        { name: 'TypeScript', uri: 'https://www.typescriptlang.org/' },
        { name: 'Laravel', uri: 'https://laravel.com/' },
        { name: 'Node Js', uri: 'https://nodejs.org/' },
      ],
    }
  },
  head() {
    return {
      title: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
        'menu.about'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('about.meta.description'),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
            'menu.about'
          )}`,
        },
        { hid: 'og:url', name: 'og:url', content: this.localePath('/about') },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://bpsmartdesign.tk/me.webp',
        },
      ],
    }
  },
}
</script>
