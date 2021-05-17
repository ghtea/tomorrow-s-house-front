import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);


const option = {
  breakpoint: {
    mobileBreakpoint: 'xs' // This is equivalent to a value of 960
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.lighten2,
        secondary: colors.red.lighten4,
        accent: colors.pink,
      },
    },
  },
}

export default new Vuetify(option);
