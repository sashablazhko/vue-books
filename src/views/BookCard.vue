<template>
  <div class="show-card">
    <img class="show-card__img" :src="require(`@/assets/img/posters/${book.poster}`)" alt="`${book.title} Book Poster`" />
    <div>
      <h3>{{ book.title }}</h3>
      <h4>({{ book.year }})</h4>
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookcard",
  props: ["book"]
};
</script>

<style>
.show-card {
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
}
.show-card__img {
  width: 46%;
  float: left;
  margin-right: 10px;
}
</style>
