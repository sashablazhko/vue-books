<template>
  <div class="landing">
    <h1>sbooks</h1>
    <input type="text" placeholder="Поиск" />
    <router-link to="/search">Загрузить все</router-link>  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "landing",
  components: {
    HelloWorld
  }
};
</script>
