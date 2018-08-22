<template>
  <!-- <div class="landing">
    <h1>sbooks</h1>
    <input type="text" placeholder="Поиск" />
    <router-link to="/search">Загрузить все</router-link>  </div> -->
    <v-content :style="{ 'background': 'url(\'' + image + '\') center center no-repeat','background-size': 'cover' }">
      <v-container fluid fill-height>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 sm8 md6 lg4 class="text-xs-center">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <h2>Kidsbook</h2> 
              </v-card-title>
              <v-card-text>
                <v-layout row>
                  <v-flex xs12>
                    <form @submit.prevent="goToSearch">
                      <v-text-field
                        :value="searchTerm" 
                        @keyup="updateSearchTerm"
                        placeholder="Поиск"
                      ></v-text-field>
                    </form>
                  </v-flex>
                  <v-flex p>
                    <v-btn flat icon :to="{name: 'search'}">
                      <v-icon>subdirectory_arrow_left</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions  class="justify-center">
                <v-btn color="primary" @click="clearSearchTerm">загрузить все</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>      

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "landing",
  data() {
    return {
      image: require("@/assets/img/3.jpg")
    };
  },
  computed: {
    ...mapGetters({ searchTerm: "books/searchTerm" })
  },
  methods: {
    updateSearchTerm(e) {
      this.$store.commit("books/updateSearchTerm", e.target.value);
    },
    clearSearchTerm() {
      this.$store.commit("books/clearSearchTerm");
      this.$router.push("search");
    },
    goToSearch() {
      this.$router.push("search");
    }
  }
};
</script>
