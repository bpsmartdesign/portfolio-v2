<template>
  <div class="app-social fixed hidden sm:flex flex-col items-center justify-between mx-12">
    <div class="as--list">
      <ul>
        <li v-for="social in socials" :key="social.id" class="my-3 uTxtTa">
          <a :href="social.uri" class="text-lg asl--uri" target="blank">
            <font-awesome-icon :icon="['fab', social.icon]" />
          </a>
        </li>
      </ul>
    </div>
    <div class="as--line mt-4"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        { label: 'Github', icon: 'github', uri: 'https://github.com/bpsmartdesign' },
        { label: 'LinkedIn', icon: 'linkedin', uri: 'https://www.linkedin.com/in/bpsmartdesign/' },
        { label: 'Twitter', icon: 'twitter', uri: 'https://twitter.com/bpsmartdesign' },
        { label: 'Codepen', icon: 'codepen', uri: 'https://codepen.io/bpsmartdesign' },
        { label: 'Dribbble', icon: 'dribbble', uri: 'https://dribbble.com/bpsmartdesign' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $color: #f26800;
  $colorTa: #f2680045;

  .app-social {
    z-index: 1;
    left: 0; bottom: 0;

    .as--list {
      display: flex;
      flex-direction: column;
      align-items: center;

      .asl--uri {
        display: inline-block;

        &:hover {
          transform: scale(1.5);
          color: $color;
        }
      }
    }

    .as--line {
      height: 10vh;
      width: 1px;
      background-color: $colorTa;
    }
  }
</style>

