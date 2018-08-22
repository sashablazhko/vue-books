<template>
  <div class="details">
    <Head>
      <v-btn :to="{name: 'search'}" light>
        <v-icon>arrow_back</v-icon>
        Назад
      </v-btn>
    </Head>
    <v-content></v-content>
    <v-container fluid  v-if="selectedBook">
      <v-layout row>
        <v-flex p v-if="prevBtnShow">
          <v-btn flat icon :to="`/details/${selectedBook.id_book}/${selctedChapter.id_chapter - 1}`">
            <v-icon>skip_previous</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 v-if="selectShow">
          <div class="select">
            <v-select
              @change="changeChapter"
              :value="selctedChapter"
              :items="selectedBook.chapters"
              item-text="chapter_name"
              item-value="id_chapter"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </v-flex>
        <v-flex p v-if="nextBtnShow">
          <v-btn flat icon :to="`/details/${selectedBook.id_book}/${selctedChapter.id_chapter + 1}`">
            <v-icon>skip_next</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ selectedBook.book_name }}</h2>
          <h3>{{ selctedChapter.chapter_name }}</h3>
          <!-- <img :src="require(`@/assets/img/posters/${selectedBook.poster}`)" :alt="`Poster for ${selectedBook.title}`"> -->
          <div v-html="selctedChapter.chapter_content"></div> 
        </v-flex>
      </v-layout>
            <v-layout row>
        <v-flex p v-if="prevBtnShow">
          <v-btn flat icon :to="`/details/${selectedBook.id_book}/${selctedChapter.id_chapter - 1}`">
            <v-icon>skip_previous</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 v-if="selectShowFooter">
          <div class="select">
            <v-select
              @change="changeChapter"
              :value="selctedChapter"
              :items="selectedBook.chapters"
              item-text="chapter_name"
              item-value="id_chapter"
              label="Select"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </v-flex>
        <v-flex p v-if="nextBtnShow">
          <v-btn flat icon :to="`/details/${selectedBook.id_book}/${selctedChapter.id_chapter + 1}`">
            <v-icon>skip_next</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "Details",
  methods: {
    getChapterApi() {
      if (
        typeof this.selectedBook === "undefined" ||
        typeof this.selctedChapter.chapter_content === "undefined"
      ) {
        this.$store.dispatch("books/GET_CHAPTER_API", {
          bookId: this.$route.params.bookId,
          chapterId: this.$route.params.chapterId
        });
      }
    },
    changeChapter(e) {
      this.$router.push(`/details/${e.book_id}/${e.id_chapter}`);
    }
  },
  computed: {
    selectedBook() {
      return this.$store.getters["books/selectedBook"](
        this.$route.params.bookId
      );
    },
    selctedChapter() {
      return this.selectedBook.chapters.find(
        chapter => chapter.id_chapter == this.$route.params.chapterId
      );
    },
    prevBtnShow() {
      return this.selctedChapter.chapter_number > 1;
    },
    nextBtnShow() {
      return (
        this.selctedChapter.chapter_number < this.selectedBook.chapters.length
      );
    },
    selectShow() {
      return this.selectedBook.chapters.length > 1;
    },
    selectShowFooter() {
      return this.selctedChapter.chapter_content;
    }
  },
  watch: {
    "$route.params.chapterId": function() {
      this.getChapterApi();
    }
  },
  components: {
    Head
  },
  mounted() {
    this.getChapterApi();
  }
};
</script>
