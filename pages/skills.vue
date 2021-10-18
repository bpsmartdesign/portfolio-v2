<template>
  <div class="skill--container flex items-center justify-center flex-wrap content-center py-6 lg:flex lg:flex-nowrap">
    <div class="work--timeline lg:mr-10 w-full lg:w-3/4">
      <MainTitle title="Work history & Skills" num="0.2" />
      <div class="wt--container">
        <div v-for="exp in experiences" :key="exp.id" class="wt--item">
          <div class="wti--desc">
            <div class="wtid--content">
              <h3 :style="{ color: exp.color}">{{ exp.role }}</h3>
              <h3 class="font-thin text-sm italic" :style="{ color: exp.colorTa}">From <span class="underline cursor-pointer">{{ exp.from }}</span> to <span class="underline cursor-pointer">{{ exp.to }}</span></h3>
              <p class="mt-6 text-base divide-y">{{ exp.description }}</p>
              <div class="divider my-3" :style="{ backgroundColor: exp.colorTa}"></div>
              <ul class="text-xs font-bold" :style="{ color: exp.colorTa}">
                <li v-for="tag in exp.tags" :key="tag.id" class="deco">{{tag}}</li>
              </ul>
            </div>
            <div class="wtid--aside font-thin text-sm" :style="{ backgroundColor: exp.color}">
              <a :href="exp.uri">{{ exp.enterprise }}</a>
            </div>
          </div>
          <div class="wti--icon" color="#900" :style="{ borderColor: exp.color}">
            <a :href="exp.uri"><img :src="exp.logo" :alt="exp.enterprise" width="50px" height="50px"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="skill--list w-full lg:w-1/4">
      <div v-for="skill in skills" :key="skill.id" class="sl--item font-thin text-sm">
        <a :href="skill.uri" target="blank" class="">{{ skill.elt}}</a>
        <div class="sl--value" :style="{ width: skill.value}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data () {
    return {
      experiences: [
        {
          enterprise: 'Workerly',
          logo: '/enterprises_logo/workerly.webp',
          uri: '#',
          tags: ['React', 'Typescript', 'Umi Js', 'Ant Design', 'Slack', 'Jira'],
          role: 'Software Engineer',
          color: '#3c64ac',
          colorTa: '#3c64ac80',
          description: 'Member of the Front-end Developer team, responsible for the design & production of the required components',
          from: 'September 2021',
          to: 'Now'
        }, {
          enterprise: 'Mayem solutions',
          logo: '/enterprises_logo/mayem_solutions.webp',
          uri: 'https://mayem-solutions.com/',
          tags: ['VueJs', 'Laravel', 'Postgre', 'Element_UI', 'Trello', 'Gitlab', 'Flutter'],
          role: 'Fullstack Web & Mobile developper',
          color: '#fdb91f',
          colorTa: '#fdb91f80',
          description: 'Fullstack web & mobile developer, technical manager of IT projects',
          from: 'Febuary 2021',
          to: 'July 2021'
        }, {
          enterprise: 'Stratochange',
          logo: '/enterprises_logo/stratochange.webp',
          uri: 'http://stratochange-001-site4.btempurl.com/',
          tags: ['VueJs', 'Tailwind', 'Javascript Es6 +', 'Vuetify', 'NuxtJs'],
          role: 'Front End Developper',
          color: '#0367b5',
          colorTa: '#0367b580',
          description: 'Front end team leader, responsible for the design and implementation of interfaces and graphic components',
          from: 'November 2019',
          to: 'Now'
        }, {
          enterprise: 'Mveng Engineering',
          logo: '/enterprises_logo/mveng.webp',
          uri: '#',
          tags: ['Laravel', 'jQuery', 'HTML / CSS', 'Responsive Design'],
          role: 'Fullstack Web developper',
          color: '#9901d0',
          colorTa: '#9901d080',
          description: 'Use of modern technologies to design and build amazing responsive applications',
          from: 'April 2018',
          to: 'December 2020'
        }, {
          enterprise: 'Camsoft Group',
          logo: '/enterprises_logo/camsoft.webp',
          uri: 'https://www.camsoft-group.com/',
          tags: ['Php', 'Bootstrap', 'Javascript', 'Adobe Photoshop'],
          role: 'Front End Developper',
          color: '#006fbd',
          colorTa: '#006fbd80',
          description: 'Use of modern technologies to design and build web applications',
          from: 'March 2017',
          to: 'August 2018'
        }, {
          enterprise: 'Freelance',
          logo: '/enterprises_logo/freelance.webp',
          uri: '#',
          tags: ['React', 'Typescript', 'Vue', 'Laravel', 'Node', 'Flutter', 'Wordpress', '...'],
          role: 'Freelancer',
          color: '#404042',
          colorTa: '#40404280',
          description: 'Always Learning new technologies and build scalable applications for clients and for myself',
          from: 'October 2012',
          to: 'Now'
        },
      ],
      skills: [
        { elt: 'Vue Js', value: '91%', uri: 'https://vuejs.org/' },
        { elt: 'React', value: '72%', uri: 'https://reactjs.org/' },
        { elt: 'Node Js', value: '45%', uri: 'https://nodejs.org/' },
        { elt: 'Laravel', value: '87%', uri: 'https://laravel.com/' },
        { elt: 'Javascript Es6+', value: '96%', uri: 'https://www.javascript.com/' },
        { elt: 'Typescript', value: '78%', uri: 'https://www.typescriptlang.org/' },
        { elt: 'Wordpress', value: '98%', uri: 'https://wordpress.com/' },
        { elt: 'Git / Github / Gitlab / Heroku', value: '87%', uri: '#' },
        { elt: 'Flutter / React Native', value: '41%', uri: '#' },
      ]
    }
  },
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.skills')}`,
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
  $bg--dark: #091320;
  $colorTa: #f2680045;

  .skill--container {    
    .work--timeline {
      .wt--container {
        max-height: 60vh;
        overflow-y: scroll;
        scrollbar-width: none;  /* Firefox */

        &::-webkit-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          display: none;
        }

        &::-moz-scrollbar {
          display: none;
        }

        .wt--item {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          margin: 3vh 0;
          position: relative;
  
          .wti--desc {
            width: 85%;
            border-radius: .2rem .9rem .2rem .2rem;
            background-color: #fff;
            box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            position: relative;
            // height: 200px;
            
            .wtid--content {
              padding: 1rem;
              width: 80%;

              .divider {
                height: 1px;
              }

              ul {
                display: flex;

                li {
                  margin-right: .5rem;
                }
              }
            }

            .wtid--aside {
              width: 20%;
              height: 100%;
              color: #fff;
              position: absolute;
              top: 0; right: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;

            }
          }
  
          .wti--icon {
            width: 7vh; height: 7vh;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
            position: relative;
            border: solid;
            padding: .6rem;

            img {
              height: 70%;
              border-radius: 50%;
            }

            &::before {
              content: "";
              position: absolute;
              height: 1px;
              width: 100px;
              background-color: #fff;
              z-index: -1;
              right: 50%;
            }

            &::after {
              content: "";
              position: absolute;
              width: 1px;
              height: calc(4vh + 150px);
              background-color: #fff;
              z-index: -1;
              top: 50%;
            }
          }
  
          &:nth-child(2n + 1) {
            flex-direction: row-reverse;

            .wti--desc {
              flex-direction: row-reverse;

              .wtid--aside {
                left: 0;
              }
            }

            .wti--icon {

              &::before {
                left: 50%;
              }

              &::after {
                top: 50%;
              }
            }
          }

          &:last-child {
            .wti--icon {
              &::after {
                display: none;
                height: 0; width: 0;
              }
            }
          }
        }
      }
    }

    .skill--list {
      .sl--item {
        position: relative;
        width: 100%;
        margin: 1.5rem 0;
        color: $tColor2;

        &::before {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -.4rem;
        }

        .sl--value {
          position: absolute;
          bottom: -.4rem;
          height: 2px;
          background-color: $color;
        }
      }
    }
  }
</style>


