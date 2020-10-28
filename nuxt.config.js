
export default {
  target: 'static',
  head: {
    title: 'butler_fuqua_ministry',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/styles/global.css'
  ],
  plugins: [
  ],
  components: true,
  pwa: {
    manifest: {
      name: 'Testimonies App',
      short_name: 'testimonies',
      start_url: '/',
      background_color: "#ffffff",
      theme_color: "#000000",
      display: "standalone",
      lang: 'en',
      useWebmanifestExtension: false
    }
  },
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',

    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: process.env.apiKey,
    //       authDomain: process.env.authDomain,
    //       databaseURL: process.env.databaseURL,
    //       projectId: process.env.projectId,
    //       storageBucket: process.env.storageBucket,
    //       messagingSenderId: process.env.messagingSenderId,
    //       appId: process.env.appId,
    //       measurementId: process.env.measurementId
    //     },
    //     services: {
    //       auth: true,
    //       // firestore: true,
    //       functions: true,
    //       // storage: true,
    //       // realtimeDb: true,
    //       // messaging: true,
    //       performance: true,
    //       analytics: true,
    //       remoteConfig: true
    //     }
    //   }
    // ],
  ],
  axios: {},
  content: {},
  build: {
  }
}
