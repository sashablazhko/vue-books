<template>
  <div>
    <Head>
      <!-- <input :value="searchTerm" @input="updateSearchTerm" type="text" placeholder="Поиск" /> -->
      <v-text-field 
        :value="searchTerm" 
        @keyup="updateSearchTerm"
        class="inp"
        label="Поиск"
        solo
        light
      ></v-text-field>
    </Head>
    <v-content></v-content>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4 v-for="book in filteredBooks" :key="book.id_book" class="mb-2" >
          <book-card :book="book" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Head from "@/components/Head.vue";
import BookCard from "./BookCard.vue";

export default {
  name: "search",
  computed: {
    ...mapGetters({
      filteredBooks: "books/filteredBooks",
      searchTerm: "books/searchTerm"
    })
  },
  methods: {
    updateSearchTerm(e) {
      this.$store.commit("books/updateSearchTerm", e.target.value);
    }
  },
  components: {
    Head,
    BookCard
  }
};
</script>

<style>
.inp {
  max-width: 300px;
}
.inp .v-input__slot {
  margin-bottom: 0 !important;
}
</style>
