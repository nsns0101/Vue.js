module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '나의 Nuxt예제',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Nuxt Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel : "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"},
    ]
  },
  css: ['~/assets/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins:['~/plugins/vuetify.js'],
  /*
  ** Build configuration
  */
  build: {
    vendor : ['axios', 'vuetify'],
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

