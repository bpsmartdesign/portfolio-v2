<template>
  <div class="pb-10">
    <h5 class="uTxt leading-10 ml-1">{{ $t('home.introduction') }}</h5>
    <h3 class="big-title leading-10 my-2 font-black wTxt text-4xl lg:text-7xl">Biya Paul.</h3>
    <h3 class="big-title leading-10 font-black text-3xl lg:text-6xl">{{ $t('home.description') }}</h3>
    <p class="ml-1 lg:w-2/3 mt-4 mb-10 leading-relaxed">
      {{ $t('home.me') }}
      <span class="uTxtTa deco">{{ $t('home.profession') }},</span>
      {{ $t('home.text-1') }}
      <span class="uTxtTa deco">{{ $t('home.evidence-1') }}</span> 
      {{ $t('home.and') }} 
      <span class="uTxtTa deco">{{ $t('home.evidence-2') }}</span> 
      {{ $t('home.text-2') }}
    </p>
    <NuxtLink :to="localePath('/contact')" class="ml-1 bp-btn primary p-4"> {{ $t('home.contact') }} </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'app',
  head() {
    return {
      title: `Bpsmartdesign Portfolio-V2 | ${this.$t('menu.home')}`,
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
