<template>
  <div
    class="
      skill--container
      flex
      items-center
      justify-center
      flex-wrap
      content-center
      py-6
      lg:flex lg:flex-nowrap
    "
  >
    <div class="work--timeline lg:mr-10 w-full lg:w-3/4">
      <MainTitle :title="$t('skills.title')" num="0.2" />
      <div class="wt--container">
        <div v-for="exp in experiences" :key="exp.id" class="wt--item">
          <div class="wti--desc">
            <div class="wtid--content">
              <h3 :style="{ color: exp.color }">{{ exp.role }}</h3>
              <h3
                class="font-thin text-sm italic"
                :style="{ color: exp.colorTa }"
              >
                {{ $t('entity.from') }}
                <span class="underline cursor-pointer">{{ exp.from }}</span>
                {{ $t('entity.to') }}
                <span class="underline cursor-pointer">{{ exp.to }}</span>
              </h3>
              <p class="mt-6 text-base divide-y">{{ exp.description }}</p>
              <div
                class="divider my-3"
                :style="{ backgroundColor: exp.colorTa }"
              ></div>
              <ul class="text-xs font-bold" :style="{ color: exp.colorTa }">
                <li v-for="tag in exp.tags" :key="tag.id" class="deco">
                  {{ tag }}
                </li>
              </ul>
            </div>
            <div
              class="wtid--aside font-thin text-sm"
              :style="{ backgroundColor: exp.color }"
            >
              <a :href="exp.uri">{{ exp.enterprise }}</a>
            </div>
          </div>
          <div
            class="wti--icon t-none"
            color="#900"
            :style="{ borderColor: exp.color }"
          >
            <a :href="exp.uri"
              ><img
                :src="exp.logo"
                :alt="exp.enterprise"
                width="50px"
                height="50px"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="skill--list w-full lg:w-1/4">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="sl--item font-thin text-sm"
      >
        <a :href="skill.uri" target="blank" class="">{{ skill.elt }}</a>
        <div class="sl--value" :style="{ width: skill.value }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      experiences: [
        {
          enterprise: 'Workerly',
          logo: '/enterprises_logo/workerly.webp',
          uri: 'https://www.workerly.io/',
          tags: [
            'React',
            'Typescript',
            'Umi Js',
            'Ant Design',
            'Slack',
            'Jira',
          ],
          role: this.$t('entity.software-engineer'),
          color: '#3c64ac',
          colorTa: '#3c64ac80',
          description: this.$t('entity.wly-exp-desc'),
          from: 'September 2021',
          to: 'Now',
        },
        {
          enterprise: 'Mayem solutions',
          logo: '/enterprises_logo/mayem_solutions.webp',
          uri: 'https://mayem-solutions.com/',
          tags: [
            'VueJs',
            'Laravel',
            'Postgre',
            'Element_UI',
            'Trello',
            'Gitlab',
            'Flutter',
          ],
          role: this.$t('entity.fullstack'),
          color: '#fdb91f',
          colorTa: '#fdb91f80',
          description: this.$t('entity.mayem-exp-desc'),
          from: 'Febuary 2021',
          to: 'July 2021',
        },
        {
          enterprise: 'Stratochange',
          logo: '/enterprises_logo/stratochange.webp',
          uri: 'http://stratochange-nuxt.herokuapp.com/',
          tags: ['VueJs', 'Tailwind', 'Javascript Es6 +', 'Vuetify', 'NuxtJs'],
          role: this.$t('entity.frontend'),
          color: '#0367b5',
          colorTa: '#0367b580',
          description: this.$t('entity.strato-exp-desc'),
          from: 'November 2019',
          to: 'Now',
        },
        {
          enterprise: 'Mveng Engineering',
          logo: '/enterprises_logo/mveng.webp',
          uri: 'https://mvengi.com/',
          tags: ['Laravel', 'jQuery', 'HTML / CSS', 'Responsive Design'],
          role: this.$t('entity.fullstack-web'),
          color: '#9901d0',
          colorTa: '#9901d080',
          description: this.$t('entity.mveng-exp-desc'),
          from: 'April 2018',
          to: 'December 2020',
        },
        {
          enterprise: 'Camsoft Group',
          logo: '/enterprises_logo/camsoft.webp',
          uri: 'https://www.camsoft-group.com/',
          tags: ['Php', 'Bootstrap', 'Javascript', 'Adobe Photoshop'],
          role: this.$t('entity.fullstack-web'),
          color: '#006fbd',
          colorTa: '#006fbd80',
          description: this.$t('entity.camsoft-exp-desc'),
          from: 'March 2017',
          to: 'August 2018',
        },
        {
          enterprise: 'Freelance',
          logo: '/enterprises_logo/freelance.webp',
          uri: '#',
          tags: [
            'React',
            'Typescript',
            'Vue',
            'Laravel',
            'Node',
            'Flutter',
            'Wordpress',
            '...',
          ],
          role: this.$t('entity.free'),
          color: '#404042',
          colorTa: '#40404280',
          description: this.$t('entity.free-exp-desc'),
          from: 'October 2012',
          to: 'Now',
        },
      ],
      skills: [
        { elt: 'Vue Js', value: '91%', uri: 'https://vuejs.org/' },
        { elt: 'React', value: '72%', uri: 'https://reactjs.org/' },
        { elt: 'Node Js', value: '45%', uri: 'https://nodejs.org/' },
        { elt: 'Laravel', value: '87%', uri: 'https://laravel.com/' },
        {
          elt: 'Javascript Es6+',
          value: '96%',
          uri: 'https://www.javascript.com/',
        },
        {
          elt: 'Typescript',
          value: '78%',
          uri: 'https://www.typescriptlang.org/',
        },
        { elt: 'Wordpress', value: '98%', uri: 'https://wordpress.com/' },
        { elt: 'Git | Versionning', value: '87%', uri: '#' },
        { elt: 'Flutter / React Native', value: '41%', uri: '#' },
      ],
    }
  },
  head() {
    return {
      title: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
        'menu.skills'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('skills.meta.description'),
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2 | ${this.$t(
            'menu.skills'
          )}`,
        },
        { hid: 'og:url', name: 'og:url', content: this.localePath('/skills') },
      ],
    }
  },
}
</script>