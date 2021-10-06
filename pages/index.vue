<template>
  <div>
    <h5 class="uTxt leading-10 ml-1">Hi, my name is</h5>
    <h3 class="big-title leading-10 my-2 font-black">Biya Paul.</h3>
    <h3 class="big-title leading-10 font-black">I build web & mobile app.</h3>
    <p class="ml-1 w-2/3 mt-4 mb-10 leading-relaxed">
      I'm a <span class="uTxtTa deco">software engineer,</span> specializing in designing and building scalable and maintanable solutions for web & mobile (...) for more <span class="uTxtTa deco">innovative</span> and <span class="uTxtTa deco">intuitive</span> tools both for individuals and for small or large businesses with distinct sizes.
    </p>
    <NuxtLink to="/contact" class="ml-1 bp-btn primary p-4"> Get in touch </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'app',
  head: {
    title: 'Bpsmartdesign Portfolio-V2 | Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  }
}
</script>
