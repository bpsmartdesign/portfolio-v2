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
      <MainTitle :title="$t('work.title')" num="0.3" />
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
              <p
                class="
                  short--descritpion
                  uTxt
                  italic
                  text-base text-center
                  px-3
                  leading-3
                "
              >
                {{ work.shortDescription }}
              </p>
              <ul class="text-xs font-thin list center text-list">
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
            <div class="wid--container font-thin">
              <p
                class="text-center overflow-hidden deco m--small"
                @click="handleViewProject(work)"
              >
                {{ $t('work.see-details') }}
              </p>
            </div>
          </div>
          <ul class="wic--links m-none mb-4">
            <li class="text-xs mr-2">
              <a :href="work.uri" target="blank"
                ><font-awesome-icon :icon="['fa', 'external-link-alt']"
              /></a>
            </li>
            <li class="text-xs">
              <a :href="work.github" target="blank"
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

          <ul class="text-xs font-thin uTxtTa2 list text-list">
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
          <p class="my-6" v-html="currentWorkView.description"></p>
        </div>
        <div class="dc--footer flex items-center">
          <a
            :href="currentWorkView.github"
            target="blank"
            class="bp-btn p-2 text-xs"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
          <a
            :href="currentWorkView.uri"
            target="blank"
            class="bp-btn p-2 text-xs mx-3"
            ><font-awesome-icon :icon="['fa', 'external-link-alt']"
          /></a>
          <a
            href="https://t.me/bpsmartdesign"
            target="blank"
            class="bp-btn p-2 text-xs no-display m-visible"
            ><font-awesome-icon :icon="['fab', 'telegram']"
          /></a>
          <a
            href="https://wa.me/+237670331580"
            target="blank"
            class="bp-btn p-2 text-xs mx-3 no-display m-visible"
            ><font-awesome-icon :icon="['fab', 'whatsapp']"
          /></a>
          <a
            :href="`mailto:${mail}?subject= Contact from : Portfolio V2`"
            class="bp-btn px-3 py-2 uTxt text-xs right"
          >
            <font-awesome-icon
              :icon="['fa', 'envelope']"
              class="no-display m-visible"
            />
            <span class="m-none">
              {{ $t('entity.talk') }}
            </span>
          </a>
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
          name: 'Aichemy - Testgold',
          img: '/works/testgold.webp',
          uri: 'https://dev.k8s.testgold.dev/',
          github: '#',
          keyword: [
            '#Test_automation',
            '#Auto_gen',
            '#Auto_heal',
            '#Enhance_coverage',
          ],
          tags: [
            'Vue Js',
            'Element Ui',
            'Javascript',
            'Django',
            'Slack',
            'Github',
            'AWS',
          ],
          description: this.$t('entity.aichemy-full-desc'),
          shortDescription: this.$t('entity.aichemy-short-desc'),
        },
        {
          name: 'Workerly',
          img: '/works/workerly.webp',
          uri: 'https://trial.app.workerly.io/',
          github: '#',
          keyword: [
            '#Work Schedules',
            '#Time-off Management',
            '#Timesheets & Payroll',
            '#workerly',
          ],
          tags: [
            'React Js',
            'Umi Js',
            'Ant Design',
            'Django',
            'Slack',
            'Jira',
            'Github',
            'AWS',
          ],
          description: this.$t('entity.wly-full-desc'),
          shortDescription: this.$t('entity.wly-short-desc'),
        },
        {
          name: 'Season',
          img: '/works/season.webp',
          uri: 'https://mayem-solutions.com/projets-ms/',
          github: '#',
          keyword: [
            '#beds24',
            '#chicApart',
            '#hosting',
            '#accomodations',
            '#booking',
          ],
          tags: [
            'VueJs',
            'Laravel',
            'PostgreSQL',
            'Element UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          description: this.$t('entity.season-full-desc'),
          shortDescription: this.$t('entity.season-short-desc'),
        },
        {
          name: 'Stratochange',
          img: '/works/stratochange.webp',
          uri: 'http://stratochange-nuxt.herokuapp.com/',
          github: '#',
          keyword: ['#change', '#stakholder', '#priorisations', '#risks'],
          tags: [
            'VueJs',
            'NuxtJs',
            'C#',
            'Tailwind Css',
            'Microsoft Azure',
            'Flutter',
          ],
          description: this.$t('entity.strato-full-desc'),
          shortDescription: this.$t('entity.strato-short-desc'),
        },
        {
          name: 'Argon',
          img: '/works/argon.webp',
          uri: 'https://mvengi.com/solutions/4',
          github: '#',
          keyword: ['#shool management system', '#education', '#learn'],
          tags: ['Laravel', 'jQuery', 'HTML/CSS', 'MySQL', 'cPanel'],
          description: this.$t('entity.argon-full-desc'),
          shortDescription: this.$t('entity.argon-short-desc'),
        },
        {
          name: 'Easy Gest',
          img: '/works/easygest.webp',
          uri: '#',
          github: '#',
          keyword: [
            '#management',
            '#Human resources',
            '#Accounting',
            '#messaging',
          ],
          tags: ['VueJs', 'Laravel', 'PostgreSQL', 'Bootstrap'],
          description: this.$t('entity.easy-full-desc'),
          shortDescription: this.$t('entity.easy-short-desc'),
        },
        {
          name: 'Van Internationnal App',
          img: '/works/van_international.webp',
          uri: '#',
          github: '#',
          keyword: ['#transit', '#customs', '#clients', '#packages'],
          tags: ['Laravel', 'MySQL', 'Bootstratp', 'Trello', 'Gitlab'],
          description: this.$t('entity.van-full-desc'),
          shortDescription: this.$t('entity.van-short-desc'),
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
      title: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
        'menu.works'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('work.meta.description'),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
            'menu.works'
          )}`,
        },
        { hid: 'og:url', name: 'og:url', content: this.localePath('/work') },
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
