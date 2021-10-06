<template>
  <div class="app-header py-6 px-12 w-screen">
    <div class="logo">
      <div class="logo--container p-1">
        <NuxtLink to="/">
          <img src="/logo.png" alt="">
        </NuxtLink>
      </div>
      <div class="flag--container">
        <input id="menu-open" type="checkbox" href="#" class="menu-open" name="menu-open"/>
        <label class="menu-open-button" for="menu-open">
          <img src="/locales/usa.svg" alt="" class="filter--bg">
        </label>
        
        <a v-for="(locale, id) in locales" :key="id" href="#" class="menu-item">
          <img :src="`/locales/${locale.flag}`" alt="">
        </a>
      </div>
    </div>
    <div class="app-nav">
      <ul>
        <li v-for="(link, id) in links" :key="id"  :class="link.active === true && 'active'">
          <NuxtLink :to="link.uri" class="font-medium">
            <span class="uTxt font-bold text-xs">{{ `0${id + 1}.` }}</span>
            {{link.label}}
          </NuxtLink>
        </li>
        <li class="l-resume">Resume</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { label: 'About', uri: '/about', active: false },
        { label: 'Skills', uri: '/skills', active: false },
        { label: 'Works', uri: '/works', active: false },
        { label: 'Contact', uri: '/contact', active: false },
      ],
      locales: [
        { label: 'English', flag: 'usa.svg', active: false },
        { label: 'Français', flag: 'france.svg', active: false },
        { label: 'Español', flag: 'spain.svg', active: false },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "mathsass";

  //vars
  $fg:#e91e63;
  $bg:#8bc34a;
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
  
  %goo{
    filter:url('#goo');
    // debug 
    // background:rgba(255,0,0,0.2);
  }

  %ball{
    background:$bg--dark;
    border-radius:100%;
    width:30px;
    height:30px;
    margin-left:-15px;
    position:absolute;
    right: 3px;
    text-align:center;
    line-height:30px;
    transform:translate3d(0,0,0);
    transition:transform ease-out 200ms;
    overflow: hidden;
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
        cursor: pointer;
      }

      &:hover {
        transform:scale(.8) translate3d(0,0,0);
      }
    }

    .menu-item{
      @extend %ball;
      transform:scale(.75);
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


</style>

