<template>
  <div class="work--container overflow-hidden py-6 flex-col items-center justify-center flex-wrap content-center">
    <div class="w-full">
      <MainTitle title="Some things I've build" num="0.3" />
      <div class="wc--container flex items-center justify-center flex-wrap">
        <div v-for="work in works" :key="work.id" class="wc--item animate__animated animate__fadeIn">
          <div class="wi--img">
            <img :src="work.img" :alt="work.name" min-width="400px" min-height="190px">
          </div>
          <div class="wi--content">
            <div class="wic--elt">
              <h3 class="wic--title text-3xl text-white font-black text-center">{{ work.name }}</h3>
              <div class="short--divider my-3"></div>
              <p class="short--descritpion uTxt italic text-base">{{ work.shortDescription }}</p>
              <ul class="text-xs font-thin uTxtTa2 list">
                <li v-for="tag in work.keyword" :key="tag.id" class="deco">{{tag}}</li>
              </ul>
            </div>         
          </div>
          <div class="wi--details animate__animated animate__delay-slow animate__flipInY">
            <div class="wid--container p-3 font-thin text-base">
              <p class="text-center overflow-hidden">{{ work.description}}</p>
              <div class="divider my-5"></div>
              <ul class="text-xs font-bold uTxtTa">
                <li v-for="tag in work.tags" :key="tag.id" class="deco">{{tag}}</li>
              </ul>
            </div>
          </div>
          <ul class="wic--links mb-4">
            <li class="text-sm mr-3"> <a :href="work.uri"><font-awesome-icon :icon="['fa', 'external-link-alt']" /></a> </li>
            <li class="text-sm"> <a :href="work.github"><font-awesome-icon :icon="['fab', 'github']" /></a> </li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data () {
    return {
      works: [
        {
          name: 'Workerly',
          img: '/works/workerly.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        }, {
          name: 'Season',
          img: '/works/season.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        }, {
          name: 'Stratochange',
          img: '/works/stratochange.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        }, {
          name: 'Argon',
          img: '/works/argon.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        }, {
          name: 'Easy Gest',
          img: '/works/easygest.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        }, {
          name: 'Van Internationnal App',
          img: '/works/van_international.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Element UI', 'Trello', 'Gitlab', 'Flutter'],
          description: 'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
      ],
      activatedWork: undefined,
      loading: false,
    }
  },
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.work')}`,
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
  $tColor1: #ccd6f6;
  $tColor2: #8892b0;
  $color: #f26800;
  $colorTa: #f2680045;
  $colorTa2: #f2680099;
  $bg--dark: #091320;
  $bg: #0a192f;
  $bgTa: #0a192fcc;
  $bgTa2: #0a192f99;

  .work--container {
    display: flex;
    align-items: center;

    .wc--container {

      &::-webkit-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        display: none;
      }

      .wc--item {
        margin-bottom: 3vh;
        overflow: hidden;
        border-radius: .4rem;
        position: relative;

        .wi--img {
          height: 100%;

          img {
            height: 100%;
          }
        }

        .wi--content {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: $bgTa;
          display: flex;
          flex-direction: column;
          align-items: left;
          justify-content: space-between;

          .wic--elt {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 100%;
            transition: all .8s ease-in;

            .short--divider {
              width: 10%;
              height: 1px;
              background-color: $color;
            }
          }

        }

        .wi--details {
          position: absolute;
          top: 12%; left: 7%;
          width: 86%;
          height: 76%;
          border: solid 1px $color;
          border-radius: 5px 12px;
          display: none;

          .wid--container {
            width: calc(100% - 10px); height: calc(100% - 10px);
            background-color: $bg--dark;
            border: solid 1px $colorTa;
            margin: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 5px 8px;

            .divider {
              height: 1px;
              width: 80%;
              background-color: $colorTa;
            }

            ul {
              display: flex;
              // color: $tColor1;

              li {
                margin-right: .5rem;
              }
            }
          }
        }

        .wic--links {
          position: absolute;
          bottom: 10px; left: 0;
          height: 10%;
          width: 70px;
          display: flex;
          align-items: center;
          color: #fff;
          background-color: $color;
          padding: 20px 10px;
          border: solid 1px #fff;
          border-left: solid 6px $bg;
          border-radius: 0 .3rem .3rem 0;

          li {
            &:hover {
              color: $bg--dark;
              transition: all .15s ease-in-out;
              transform: scale(1.05);
            }
          }
        }

        &:hover {
          border: solid 1px $color;

          .wi--img {
            transform: scale(1.04) rotate(.5deg);
          }

          .wi--content {
            background-color: $bgTa2;

            .wic--elt {
              transition: all .6s ease-in;
              transform: translateY(-150%);
            }
          }

          .wi--details {
            display: block;
          }
        }
      }
    }
  }

  @media (min-width: '1280px') {
    .wc--container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .wc--item {
        width: calc(50% - 10px) !important;
      }
    }
  }
</style>