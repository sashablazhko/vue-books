<template>
  <div class="details">
    <Head>
      <h2>
        <router-link :to="{name: 'search'}">
          Back
        </router-link>
      </h2>
    </Head>
    <section>
      <template v-if="selectedBook">
        <h2>{{ selectedBook.book_name }}</h2>
        <h3>{{ selctedChapter.chapter_name }}</h3>
        <!-- <img :src="require(`@/assets/img/posters/${selectedBook.poster}`)" :alt="`Poster for ${selectedBook.title}`"> -->
        <p v-html="selctedChapter.chapter_content"></p> 
      </template>
    </section>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "Details",
  computed: {
    selectedBook() {
      return this.$store.getters.selectedBook(this.$route.params.bookId);
    },
    selctedChapter() {
      return this.selectedBook.chapters.find(
        chapter => chapter.id_chapter == this.$route.params.chapterId
      );
    }
  },
  components: {
    Head
  },
  mounted() {
    if (typeof this.selctedChapter.chapter_content === "undefined") {
      this.$store.dispatch("GET_CHAPTER_API", {
        bookId: this.$route.params.bookId,
        chapterId: this.$route.params.chapterId
      });
    }
  }
};
</script>
