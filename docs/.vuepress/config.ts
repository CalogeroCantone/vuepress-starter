import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { containerPlugin } from '@vuepress/plugin-container'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'




export default defineUserConfig({
  base: "/vuepress-starter/",
  lang: 'en-US',
  title: 'Calogero Cantone',
  description: 'A test of VuePress',
  plugins: [
    pwaPlugin(),
    backToTopPlugin(),
    mediumZoomPlugin(),
    prismjsPlugin(),
    searchPlugin(),
    nprogressPlugin(),
    containerPlugin({
      "type": "tip"
    }),
  ],
})


