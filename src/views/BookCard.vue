<template>
  <div class="show-card">
    <router-link :to="`/details/${book.id_book}/${selectedChapter}`">
      <img class="show-card__img" :src="`${apiHost}/uploads/${book.book_img}`" alt="`${book.book_name} Book Poster`" />
    </router-link>
    <div>
      <router-link :to="`/details/${book.id_book}/${selectedChapter}`">
        <h3>{{ book.book_name }}</h3>
      </router-link>
      <h4>({{ book.author_name }})</h4>
      <p>{{ book.book_description }}</p>
    </div>
    <div>
      <ChaptersSelect 
        :chapters="book.chapters" 
        :selectedChapter="selectedChapter"  
        @changeSelectedChapter="changeSelectedChapter" />
    </div>
  </div>
</template>

<script>
import ChaptersSelect from "@/components/ChaptersSelect.vue";
import { apiHost } from "../../config";

export default {
  name: "bookcard",
  props: ["book"],
  data() {
    return {
      apiHost,
      selectedChapter: this.book.chapters[0].id_chapter
    };
  },
  methods: {
    changeSelectedChapter(chapterId) {
      this.selectedChapter = chapterId;
    }
  },
  components: {
    ChaptersSelect
  }
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
