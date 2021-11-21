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

<style lang="scss" scoped>
$tColor1: #ccd6f6;
$color: #f26800;
$colorTa: #f2680045;
.about--container {
  .about--text {
    p {
      margin: 25px 0;
    }

    .list--tech {
      list-style-type: '→' !important;
      color: $color;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      li {
        width: 49%;

        a {
          display: inline-block;
          width: calc(100% - 50px);
        }

        &::marker {
          display: inline-block;
        }
      }
    }
  }

  .about--detail {
    position: relative;

    img {
      display: block;
      width: 80%;
      margin: 5% auto;
      border-radius: 0.2rem 0.8rem;
      cursor: pointer;
      border: solid 1px $color;
      z-index: 2;
      -webkit-filter: grayscale(0.2);
      filter: grayscale(0.2);

      &:hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
        -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 80%;
      height: 90%;
      border-radius: 0.8rem;
      border: solid 1px $color;
    }

    &::after {
      top: 0;
      left: 5%;
      z-index: -1;
    }

    &::before {
      bottom: 2.5%;
      right: 7.5%;
    }
  }
}
</style>
