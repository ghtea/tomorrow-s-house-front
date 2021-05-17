<template>
  <v-navigation-drawer
    v-bind="$attrs"
    app
  >
    <section
      class="pt-2 pb-2"
    >
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          내일의 집
        </v-list-item-title>
        <!-- <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
      </v-list-item-content>
    </section>

    <v-divider />

    <section v-if="isLoggedIn">
      <v-btn
        color="primary"
        fab
        dark
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </section>
    <section
      v-else
      class="d-flex justify-space-around pt-2 pb-2"
    >
      <v-btn
        color="primary"
        outlined
        depressed
        to="/auth/sign-in"
      >
        로그인
      </v-btn>
      <v-btn
        color="primary"
        dark
        depressed
        to="/auth/sign-up"
      >
        회원가입
      </v-btn>
    </section>

    <v-divider />

    <v-list
      dense
      nav
      class="mt-2"
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary white--text"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DefaultDrawer",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", to: "/" },
        { title: "List", icon: "mdi-view-dashboard", to: "/product-list" },
      ],
      right: null,
    };
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
};
</script>
<style lang=""></style>
