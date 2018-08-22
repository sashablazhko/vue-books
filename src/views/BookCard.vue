<template>
  <v-card class="ma-1" height="100%">
    <div class="wrapper">
      <div class="pic">
        <router-link :to="`/details/${book.id_book}/${selectedChapter}`">
          <img :src="`${apiHost}/uploads/${book.book_img}`" :alt="`$${book.book_name}`">
        </router-link>
      </div>
      <div class="content">
        <router-link :to="`/details/${book.id_book}/${selectedChapter}`">
          <div class="headline">{{ book.book_name }}</div>
        </router-link>
        <div>{{ book.book_description }}</div>
        <div class="fadeout"></div>
      </div>
    </div>
    <div class="select">
      <p v-if="book.chapters.length == 1" class="noselect">Тут главу выбирать не прийдется ;)</p>
      <v-select
        v-else
        :items="book.chapters"
        :value="selectObj"
        @change="changeSelectedObj"
        item-text="chapter_name"
        item-value="id_chapter"
        return-object
        single-line
      ></v-select>
    </div>
    <div>

    </div>
    <div class="author">
      <h4>{{ book.author_name }}</h4>
    </div>
  </v-card>
</template>

<script>
import { apiHost } from "../../config";

export default {
  name: "bookcard",
  props: ["book"],
  data() {
    return {
      apiHost,
      selectedChapter: this.book.chapters[0].id_chapter,
      selectObj: this.book.chapters[0]
    };
  },
  methods: {
    changeSelectedObj(obj) {
      this.selectObj = obj;
      this.selectedChapter = obj.id_chapter;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.content {
  padding: 5px 15px 0;
  max-height: 225px;
  overflow: hidden;
  position: relative;
}
.select {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.noselect {
  padding-top: 23px;
  min-height: 52px;
}
.author {
  text-align: center;
}
.fadeout {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: calc(100% - 30px);
  z-index: 99;
  background: -webkit-linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: -moz-linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: -o-linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-image: -ms-linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
<style>
.select .v-select__selection--comma {
  display: block !important;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
