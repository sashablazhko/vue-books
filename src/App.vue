<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("GET_BOOKS_API");
  }
};
</script>

<style>
</style>
