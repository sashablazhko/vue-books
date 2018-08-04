<template>
  <header>
    <h1>
      <router-link :to="{name: 'landing'}">
        sbooks
      </router-link> 
    </h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Head",
  props: ["showSearch"]
};
</script>
