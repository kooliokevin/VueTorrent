import Vue from 'vue'
import type { Framework } from 'vuetify'
import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  directives: {
    Ripple
  }
})

import colors from 'vuetify/lib/util/colors'

// import variables from '@/styles/colors.scss'
// broke the variable import when updating deps
const variables = {
  // Main colors
  primary: '#35495e',
  secondary: '#3e556d',
  download: '#64CEAA',
  upload: '#00b3fa',
  ratio: '#00b2f8',
  // Torrent status colors
  'torrent-done': '#29488a',
  'torrent-downloading': '#5bb974',
  'torrent-fail': '#c23636',
  'torrent-paused': '#9CA3AF',
  'torrent-queued': '#144a96',
  'torrent-seeding': '#0098b0',
  'torrent-checking': '#144a96',
  'torrent-stalled': '#7e57c2',
  'torrent-metadata': '#7e57c2',
  'torrent-moving': '#144a96'
}

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      light: {
        accent: '#64CEAA',
        background: colors.grey.lighten4,
        selected: colors.grey.lighten2,
        red: colors.red.accent2,
        ...variables
      },
      dark: {
        accent: '#64CEAA',
        background: '#121212',
        selected: colors.grey.darken1,
        red: colors.red.accent3,
        ...variables
      }
    }
  }
})

declare module 'vue/types/vue' {
  // this.$vuetify inside Vue components
  interface Vue {
    $vuetify: Framework
  }
}
