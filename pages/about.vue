<template>
  <div class="about--container flex items-center justify-center flex-wrap content-center py-6 lg:flex lg:flex-nowrap">
    <div class="about--text w-full lg:mr-10 lg:w-3/4">
      <MainTitle title="Who is this guy ?" num="0.1" />
      <p>
        Hello!, My name is <span class="uTxtTa deco">BIYA Paul,</span> am a software Engineer and occasionally a designer. My passion for the web dates from my first year of university in 2012 when I discovered javascript.
      </p>
      <p>
        Since then, I have not hesitated to discover, design and build ultra modern and scalable platforms and applications through the multiple technologies that make up my profile.
      </p>
      <p>
        Among which the main ones are :
      </p>
      <ul class="list--tech list-inside">
        <li v-for="tech in mainTechno" :key="tech.id"><a class="ml-4" :href="tech.uri" target="blank"><span class="deco uTxtTa">{{tech.name}}</span></a></li>
      </ul>
    </div>
    <div class="mt-12 w-full flex flex-nowrap items-center lg:w-1/3">
      <div class="about--detail w-2/3 lg:w-full max-w-xs ">
        <img src="/me.webp" alt="bpsmartdesign" min-width="250px" min-height="250px" class="shadow-2xl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data () {
    return {
      mainTechno: [
        {name: 'Javascript (Es6 +)', uri: 'https://www.javascript.com/'},
        {name: 'Vue Js', uri: 'https://vuejs.org/'},
        {name: 'React', uri: 'https://reactjs.org/'},
        {name:  'TypeScript', uri: 'https://www.typescriptlang.org/'},
        {name: 'Laravel', uri: 'https://laravel.com/'},
        {name: 'Node Js', uri: 'https://nodejs.org/'},
      ],
    }
  },
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.about')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
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
      p { margin: 25px 0; }

      .list--tech {
        list-style-type: "→" !important;
        color: $color;
        display: flex;
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
        border-radius: .2rem .8rem;
        cursor: pointer;
        border: solid 1px $color;
        z-index: 2;
        filter: grayscale(.4);

        &:hover {
          filter: grayscale(0);
          transform: scale(1.02) rotate(-1deg);
        }

      }

      &::after, &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 80%; height: 90%;
        border-radius: .8rem .2rem;
        border: solid 1px $color;
        background-color: $colorTa;
      }

      &::after {
        top: 0;
        left: 5%;
      }

      &::before {
        bottom: 0;
        right: 5%;
      }
    }
  }
</style>
