<template>
  <v-app-bar
    app
    flat
    color="white"
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click="$emit('toggleDrawer')"
    />
    <template
      v-else
    >
      <v-icon
        large
        color="primary"
        class="mr-2"
      >
        mdi-home-variant
      </v-icon>
      <v-toolbar-title
        class="text-h6 font-weight-bold"
      >
        내일의 집
      </v-toolbar-title>
    </template>



    <v-spacer />

    <section>
      <v-btn
        class="ml-2"
        icon
      >
        <v-icon>mdi-heart</v-icon>
        <!-- <v-icon>mdi-heart-outline</v-icon> -->
      </v-btn>

      <v-btn
        class="ml-2"
        icon
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <template v-if="!$vuetify.breakpoint.mobile">
        <template v-if="isLoggedIn">
          <v-btn
            class="ml-2"
            color="primary"
            fab
            dark
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <template
          v-else
        >
          <v-btn
            class="ml-2"
            color="primary"
            outlined
            depressed
            to="/auth/sign-in"
          >
            로그인
          </v-btn>
          <v-btn
            class="ml-2"
            color="primary"
            dark
            depressed
            to="/auth/sign-up"
          >
            회원가입
          </v-btn>
        </template>
      </template>
    </section>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppBar",
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  updated (){
    console.log($vuetify.breakpoint.mobile)
  }
};
</script>
