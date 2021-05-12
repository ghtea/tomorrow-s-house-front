<template>
  <v-app>
    <v-app-bar>
      <router-view name="menu" />
    </v-app-bar>

    <v-main>
      <router-view name="content" />
    </v-main>
  </v-app>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>

</style>
