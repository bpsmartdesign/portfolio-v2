export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hire Professional Software Engineer | Freelancer &amp; Fullstack &amp; WordPress Developer &amp; Vue.Js & Laravel Developer, Front end Engineer. Building applications and interactive experiences, hi-end solutions, website maintenance &amp; security',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'BIYA Paul (bpsmartdesign) - Software Engineer: Portfolio - v2',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: process.env.WEBSITE_URL || 'https://bpsmartdesign.tk',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${
          process.env.WEBSITE_URL || 'https://bpsmartdesign.tk'
        }/icon.png`,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Portfolio : BIYA Paul (bpsmartdesign) - Software Engineer',
      },
      { hid: 'og:locale', name: 'og:locale', content: 'en' },
      {
        hid: 'og:locale:alternate',
        name: 'og:locale:alternate',
        content: 'fr',
      },
      {
        hid: 'og:locale:alternate',
        name: 'og:locale:alternate',
        content: 'es',
      },
      {
        hid: 'og:locale:alternate',
        name: 'og:locale:alternate',
        content: 'ru',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'qUKcluaOsrmB71akRwfcGMJOBsqVc33X9EqsCT8K8Jk',
      },
      { name: 'msapplication-TileColor', content: '#f26800' },
      { name: 'theme-color', content: '#0a192f' },
      {
        name: 'format-detection',
        content: 'telephone=no,date=no,address=no,email=no,url=no',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.css',
    '~/assets/scss/main.scss',
    '~/assets/scss/responsive.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        dir: 'ltr',
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        dir: 'ltr',
      },
      {
        name: 'Español',
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
        dir: 'ltr',
      },
      {
        name: 'русский',
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        autoprefixer: {},
      },
    },
    '@nuxtjs/tailwindcss': {
      theme: {
        screens: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px',
          // => @media (min-width: 1024px) { ... }

          xl: '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        extend: {
          width: {
            lg: '60vh',
          },
        },
      },
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.WEBSITE_URL || 'https://bpsmartdesign.tk',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    i18n: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: `${
      process.env.WEBSITE_URL || 'https://bpsmartdesign.tk'
    }/sitemap.xml`,
  },
}
