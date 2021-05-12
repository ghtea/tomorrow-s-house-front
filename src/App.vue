<template>
  <v-app>
    <router-view name="menu" />
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
