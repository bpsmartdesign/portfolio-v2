<template>
  <div class="app-header py-6 px-12 w-screen">
    <div class="logo">
      <div class="logo--container p-1">
        <NuxtLink :to="localePath('/')">
          <img src="/logo.png" alt="">
        </NuxtLink>
      </div>
      <div class="flag--container">
        <input id="menu-open" type="checkbox" href="#" class="menu-open" name="menu-open"/>
        <label id="menu-open-button" class="menu-open-button" for="menu-open">
          <img :src="`/locales/${currentLg.flag}`" alt="">
          <div class="animate__animated animate__delay-slow animate__flipInY close-menu text-sm font-thin"><font-awesome-icon :icon="['fa', 'times']" /></div>
        </label>
        
        <NuxtLink v-for="(locale, id) in locales" :key="id" :to="switchLocalePath(locale.code)" class="menu-item">
          <img :src="`/locales/${locale.flag}`" alt="">
        </NuxtLink>
      </div>
    </div>
    <div class="app-nav">
      <ul>
        <li v-for="(link, id) in links" :key="id"  :class="link.active === true && 'active'">
          <NuxtLink :to="localePath(link.uri)" class="font-medium">
            <span class="uTxt font-bold text-xs">{{ `0${id + 1}.` }}</span>
            <span class="deco">{{ $t(link.label) }}</span>
          </NuxtLink>
        </li>
        <li class="bp-btn px-3 py-2 uTxt" @click="showCv">{{ $t('menu.resume') }}</li>
      </ul>
    </div>
    <div id="cv" class="cv--container" @click.self="closeCv">
      <embed id="embed" src="/cv_en.pdf" class="cv--content animate__animated animate__flipInY" type="application/pdf" width="624" height="877">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { label: 'menu.about', uri: '/about', active: false },
        { label: 'menu.skills', uri: '/skills', active: false },
        { label: 'menu.works', uri: '/works', active: false },
        { label: 'menu.contact', uri: '/contact', active: false },
      ],
      allLocales: [
        { code: 'en', label: 'English', flag: 'usa.svg', active: false },
        { code: 'fr', label: 'Français', flag: 'france.svg', active: false },
        { code: 'es', label: 'Español', flag: 'spain.svg', active: false },
        { code: 'ru', label: 'русский', flag: 'ru.svg', active: false },
      ],
      locales: undefined,
      currentLg: undefined,
    }
  },

  watch: {
    $route(from, to) {
      const checkbox = document.getElementById('menu-open')
      if(checkbox.checked){
        checkbox.click()
        this.setCurrentLg()
      } else if (from.name.slice(-4) !== to.name.slice(-4)) 
        this.setCurrentLg()

    },
  },

  created() {
    this.setCurrentLg()
  },

  methods: {
    setCurrentLg() {
      const currentCode = this.$i18n.loadedLanguages.pop()
      const locale = this.allLocales.filter(loc => loc.code === currentCode)
      this.currentLg = Array.isArray(locale) ? locale.pop() : locale
      this.locales = this.allLocales.filter(loc => loc.code !== this.currentLg.code)
    },

    closeCv() {
      const cv = document.getElementById('cv')
      const embed = document.getElementById('embed')

      embed.classList.remove('animate__flipInY')
      embed.classList.add('animate__flipOutY')

      setTimeout(() => {
        cv.style.display = 'none'
        embed.classList.remove('animate__flipOutY')
        embed.classList.add('animate__flipInY')
      }, 750)
    },

    showCv() {
      const cv = document.getElementById('cv')
      cv.style.display = 'block'
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "mathsass";

  //vars
  $fg:#e91e63;
  $tColor1: #ccd6f6;
  $tColor2: #8892b0;
  $color: #f26800;
  $colorTa: #f2680045;
  $bg: #0a192f;
  $bg--dark: #091320;
  $pi:3.14;

  //config
  $menu-items:4+1;
  $open-distance:60px;
  $opening-angle:$pi;
  
  a{ color:inherit; }

  %ball{
    border-radius:50% !important;
    width:25px;
    height:25px;
    margin-left:-12.5px;
    position:absolute;
    right: 3px;
    text-align:center;
    line-height:25px;
    transform:translate3d(0,0,0);
    transition:transform ease-out 200ms;
  }

  .flag--container {
    width: 80px;
    height: 35px !important;
    border-radius: 12.5px;
    border: solid .1px $color;
    transform: translateX(-20px);
    display: flex;
    align-items: center;
    background-color: $bg--dark;
    position: relative;
    
    .menu-open{ display:none; }

    .menu-open-button{
      @extend %ball;
      z-index:2;
      transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
      transition-duration:400ms;
      transform:scale(.9) translate3d(0,0,0);
      cursor:pointer;

      img {
        height: 100%;
        border-radius: 50%;
        float: right;
        border: solid 2px #ffffff;
        cursor: pointer;
      }

      .close-menu {
        position: absolute;
        width: 22px; height: 22px;
        margin-left: 2px;
        margin-top: 2px;
        border-radius: 50%;
        background-color: $color;
        text-align: center;
        padding: 3px;
        color: #fff;
        display: none;
      }

      &:hover {
        transform:scale(.8) translate3d(0,0,0);
      }
    }

    .menu-item{
      @extend %ball;
      z-index: 0 !important;
      transform:scale(.75);

      img {
        display: inline-block;
        border-radius: 50%;
        border: solid 2px #ffffff;
      }

      &:hover{
        filter: grayscale(1);
      }
      @for $i from 1 through $menu-items{
        &:nth-child(#{$i+2}){
          transition-duration:180ms;
        }
      }
    }
  }

  .menu-open:checked+.menu-open-button{
    transition-timing-function:linear;
    transition-duration:200ms;
    transform:scale(0.8,0.8) translate3d(0,0,0);
    
    img {
      display: none;
    }

    .close-menu {
      display: block;
    }
  }

  .menu-open:checked~.menu-item{
    transition-timing-function:cubic-bezier(0.935, 0.000, 0.340, 1.330);
    @for $i from 1 through $menu-items{
      $angle:(($pi - $opening-angle)/2)+(($opening-angle/($menu-items - 1))*($i - 1));
      
      &:nth-child(#{$i+2}){
        transition-duration:80ms+(100ms*$i);
        transform:translate3d(cos($angle)*$open-distance,sin($angle)*$open-distance,0);
      }
    }
  }

  .cv--container {
    position: absolute;
    width: 100vw !important; height: 100vh !important;
    top: 0; left: 0;
    background-color: rgba($color: $bg--dark, $alpha: .8);
    display: none;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      display: none;
    }

    .cv--content {
      border-radius: .6rem;
      border: solid .1px $color;
      background-color: $bg--dark;
      margin-left: calc(50vw - 312px);
      margin-top: calc(50vh - 438.5px);
    }
  }
</style>

