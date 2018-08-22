<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("books/GET_BOOKS_API");
  }
};
</script>

<style>
</style>
