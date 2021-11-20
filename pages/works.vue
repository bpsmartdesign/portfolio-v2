<template>
  <div
    class="
      work--container
      overflow-hidden
      py-6
      flex-col
      items-center
      justify-center
      flex-wrap
      content-center
    "
  >
    <div class="w-full">
      <MainTitle title="Some things I've build" num="0.3" />
      <div class="wc--container flex items-center justify-center flex-wrap">
        <div
          v-for="work in works"
          :key="work.id"
          class="wc--item animate__animated animate__fadeIn"
        >
          <div class="wi--img">
            <img
              :src="work.img"
              :alt="work.name"
              min-width="400px"
              min-height="190px"
            />
          </div>
          <div class="wi--content">
            <div class="wic--elt">
              <h3 class="wic--title text-3xl text-white font-black text-center">
                {{ work.name }}
              </h3>
              <div class="short--divider my-3"></div>
              <p class="short--descritpion uTxt italic text-base">
                {{ work.shortDescription }}
              </p>
              <ul class="text-xs font-thin uTxtTa2 list">
                <li v-for="tag in work.keyword" :key="tag.id" class="deco">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="
              wi--details
              animate__animated animate__delay-slow animate__flipInY
            "
          >
            <div class="wid--container p-3 font-thin text-base">
              <p
                class="text-center overflow-hidden deco"
                @click="handleViewProject(work)"
              >
                See project Details
              </p>
            </div>
          </div>
          <ul class="wic--links mb-4">
            <li class="text-sm mr-3">
              <a :href="work.uri"
                ><font-awesome-icon :icon="['fa', 'external-link-alt']"
              /></a>
            </li>
            <li class="text-sm">
              <a :href="work.github"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="toggleWorkDrawer"
      class="drawer--container"
      @click.self="closeDrawer"
    >
      <div class="drawer--content animate__animated animate__fadeInRight">
        <h3 class="w--title">
          {{ currentWorkView.name }}
          <span class="close-drawer" @click="closeDrawer"
            ><font-awesome-icon :icon="['fa', 'times']"
          /></span>
        </h3>
        <h4 class="w--subtitle">
          {{ currentWorkView.shortDescription }}
        </h4>
        <div class="h--line"></div>
        <div class="dc--content">
          <img :src="currentWorkView.img" :alt="currentWorkView.name" />

          <ul class="text-xs font-thin uTxtTa2 list">
            <li
              v-for="tag in currentWorkView.keyword"
              :key="tag.id"
              class="deco"
            >
              {{ tag }}
            </li>
          </ul>
          <ul class="text-xs font-thin uTxtTa2 list tag my-3">
            <li v-for="tag in currentWorkView.tags" :key="tag.id" class="deco">
              {{ tag }}
            </li>
          </ul>
          <p class="my-6">
            {{ currentWorkView.description }}
          </p>
        </div>
        <div class="dc--footer flex items-center">
          <a :href="currentWorkView.github" class="bp-btn p-2 text-xs"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
          <a :href="currentWorkView.uri" class="bp-btn p-2 text-xs mx-3"
            ><font-awesome-icon :icon="['fa', 'external-link-alt']"
          /></a>
          <a
            :href="`mailto:${mail}?subject= Contact from : Portfolio V2`"
            class="bp-btn px-3 py-2 uTxt text-xs right"
            >Let's talk</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      works: [
        {
          name: 'Workerly',
          img: '/works/workerly.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
        {
          name: 'Season',
          img: '/works/season.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
        {
          name: 'Stratochange',
          img: '/works/stratochange.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
        {
          name: 'Argon',
          img: '/works/argon.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
        {
          name: 'Easy Gest',
          img: '/works/easygest.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
        {
          name: 'Van Internationnal App',
          img: '/works/van_international.webp',
          uri: '#',
          github: '#',
          keyword: ['#tag1', '#tag2', '#tag3', '#tag4'],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description:
            'Alias error voluptatibus debitis deleniti nesciunt cum tempore quas, neque, vitae eligendi quam magnam nostrum sunt officia molestiae cumque, reprehenderit officiis. Dolorum?',
          shortDescription: 'Lorem ipsum dolor sit amet consectum',
        },
      ],
      activatedWork: undefined,
      loading: false,
      currentWorkView: undefined,
      toggleWorkDrawer: false,
      mail: 'bpsmartdesign@hotmail.com',
    }
  },
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.work')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'my website description',
        },
      ],
    }
  },

  methods: {
    handleViewProject(elt) {
      this.currentWorkView = Object.assign({}, elt)
      this.toggleWorkDrawer = true
    },

    closeDrawer() {
      const target = document.querySelector('.drawer--content')

      target.classList.remove('animate__fadeInRight')
      target.classList.add('animate__fadeOutRight')

      setTimeout(() => {
        target.classList.remove('animate__fadeOutRight')
        target.classList.add('animate__fadeInRight')
        this.toggleWorkDrawer = false
      }, 750)
    },
  },
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .wc--container {
    &::-webkit-scrollbar {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      display: none;
    }

    .wc--item {
      margin-bottom: 3vh;
      overflow: hidden;
      border-radius: 0.4rem;
      position: relative;

      .wi--img {
        height: 100%;

        img {
          height: 100%;
        }
      }

      .wi--content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $bgTa;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: left;
        -ms-flex-align: left;
        align-items: left;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;

        .wic--elt {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          height: 100%;
          -webkit-transition: all 0.8s ease-in;
          -o-transition: all 0.8s ease-in;
          transition: all 0.8s ease-in;

          .short--divider {
            width: 10%;
            height: 1px;
            background-color: $color;
          }
        }
      }

      .wi--details {
        position: absolute;
        top: 12%;
        left: 7%;
        width: 86%;
        height: 76%;
        border: solid 1px $color;
        border-radius: 5px 12px;
        display: none;

        .wid--container {
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          background-color: $bg--dark;
          border: solid 1px $colorTa;
          margin: 5px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          border-radius: 5px 8px;

          .divider {
            height: 1px;
            width: 80%;
            background-color: $colorTa;
          }

          ul {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            li {
              margin-right: 0.5rem;
            }
          }
        }
      }

      .wic--links {
        position: absolute;
        bottom: 10px;
        left: 0;
        height: 10%;
        width: 70px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #fff;
        background-color: $color;
        padding: 20px 10px;
        border: solid 1px #fff;
        border-left: solid 6px $bg;
        border-radius: 0 0.3rem 0.3rem 0;

        li {
          &:hover {
            color: $bg--dark;
            -webkit-transition: all 0.15s ease-in-out;
            -o-transition: all 0.15s ease-in-out;
            transition: all 0.15s ease-in-out;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
          }
        }
      }

      &:hover {
        border: solid 1px $color;

        .wi--img {
          -webkit-transform: scale(1.04) rotate(0.5deg);
          -ms-transform: scale(1.04) rotate(0.5deg);
          transform: scale(1.04) rotate(0.5deg);
        }

        .wi--content {
          background-color: $bgTa2;

          .wic--elt {
            -webkit-transition: all 0.6s ease-in;
            -o-transition: all 0.6s ease-in;
            transition: all 0.6s ease-in;
            -webkit-transform: translateY(-150%);
            -ms-transform: translateY(-150%);
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

.drawer--container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.6);
  z-index: 99999 !important;

  .drawer--content {
    width: 70vw;
    height: 100%;
    background-color: $bg;
    float: right;
    position: relative;

    .w--title {
      padding: 30px 20px;
      padding-bottom: 5px;
      font-size: 1.5em;
      font-weight: 600;
      position: relative;

      .close-drawer {
        position: absolute;
        right: 20px;
        top: 20%;
        color: rgba($color: #777777, $alpha: 0.4);
        cursor: pointer;
      }
    }

    .w--subtitle {
      font-size: 0.8em;
      line-height: 1.2em;
      color: #777;
      padding: 0 25px;
      font-style: italic;
      max-width: 70%;
    }

    .h--line {
      height: 0.1px;
      background-color: rgba($color: #777777, $alpha: 0.2);
      margin-top: 20px;
    }

    .dc--content {
      padding: 0 20px;
      margin: 20px 0;
      height: calc(100% - 220px);
      overflow-y: scroll;

      img {
        border-radius: 0.7rem;
        margin: 1.1rem 0;
        width: clamp(400px, auto, 1000px);
      }

      p {
        font-size: 1rem;
        line-height: 1.2rem;
      }

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

    .dc--footer {
      position: fixed;
      bottom: 0;
      padding: 20px;
      width: 100%;
      height: 80px;
      border-top: solid 0.1px rgba($color: #777777, $alpha: 0.2);

      .right {
        position: absolute;
        right: 20px;
      }
    }
  }
}

@media (min-width: '1280px') {
  .wc--container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .wc--item {
      width: calc(50% - 10px) !important;
    }
  }
}
</style>
