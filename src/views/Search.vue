<template>
  <div class="search">
    <Head>
      <input :value="searchTerm" @input="updateSearchTerm" type="text" placeholder="Поиск" />
    </Head>
    <div>
      <book-card v-for="book in filteredBooks" :key="book.imdbID" :book="book" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Head from "@/components/Head.vue";
import BookCard from "./BookCard.vue";

export default {
  name: "search",
  computed: {
    ...mapGetters(["filteredBooks", "searchTerm"])
  },
  methods: {
    updateSearchTerm(e) {
      this.$store.commit("updateSearchTerm", e.target.value);
    }
  },
  components: {
    Head,
    BookCard
  }
};
</script>
