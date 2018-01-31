module.exports = {
  //插件
    plugins: [
        { src: '~/plugins/swiper-plugin.js', ssr: false },
    ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'jianshu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '~/assets/css/normalize.css', '~/assets/css/font-awesome.css',
      'swiper/dist/css/swiper.css', '~/assets/bootstrap/dist/css/bootstrap.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
  }
}
