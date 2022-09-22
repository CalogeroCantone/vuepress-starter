import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { containerPlugin } from '@vuepress/plugin-container'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'
import mermaidPlugin from 'vuepress-plugin-mermaidjs'



export default defineUserConfig({
  base: "/vuepress-starter/",
  lang: 'en-US',
  title: 'Calogero VuePress Test',
  description: 'A test of VuePress',
  plugins: [
    pwaPlugin(),
    backToTopPlugin(),
    mediumZoomPlugin(),
    prismjsPlugin(),
    searchPlugin(),
    nprogressPlugin(),
    mermaidPlugin(),
    containerPlugin({
      "type": "tip"
    }),
  ],
})


