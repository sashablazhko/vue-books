<template>
  <div class="adminauthor">
    <Head>
      <v-text-field 
        v-model="searchAuthor" 
        class="inp"
        label="Писатель"
        solo
        light
      ></v-text-field>
    </Head>
    <v-content></v-content>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title class="pb-0">
              <h3 class="headline mb-0">Добавить автора</h3>
            </v-card-title>

            <v-card-text>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="nameAuthorAdded"
                    :rules="[fieldAddEmpty]"
                  ></v-text-field>
                </v-flex>
                <v-flex p class="add-btns">
                  <v-btn
                    @click="authorAddDone"
                    icon 
                    ripple>
                    <v-icon color="green lighten-1">done</v-icon>
                  </v-btn>
                  <v-btn
                    @click="authorAddCancel"
                    icon 
                    ripple>
                    <v-icon color="orange lighten-1">cancel</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-text>

          </v-card>
        </v-flex>        
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-title primary-title>
                <h3 class="headline mb-0">Авторы</h3>
              </v-card-title>
              <v-list two-line>
                <template v-for="author in filteredAuthors">

                  <v-divider :key="`${author.id_author}_divider`"></v-divider>

                  <v-list-tile
                    :key="author.id_author"
                  >
                    <v-list-tile-avatar>
                      id: {{ author.id_author }}
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-container 
                        v-if="author.id_author == idAuthorEdited" 
                        fluid
                        class="input-wrapper">
                        <v-layout>
                          <v-flex xs12>
                            <v-text-field
                              v-model="nameAuthorEdited"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <v-list-tile-title v-else>{{ author.author_name }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action
                      v-if="author.id_author == idAuthorEdited">
                      <v-btn
                        @click="authorEditDone"
                        icon 
                        ripple>
                        <v-icon color="green lighten-1">done</v-icon>
                      </v-btn>
                      <v-btn
                        @click="authorEditCancel"
                        icon 
                        ripple>
                        <v-icon color="orange lighten-1">cancel</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action v-else>
                      <v-btn
                        @click="authorEdit(author.id_author, author.author_name)"
                        icon 
                        ripple>
                        <v-icon color="grey lighten-1">create</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>

                </template>
              </v-list>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "authors",
  data() {
    return {
      searchAuthor: "",
      idAuthorEdited: null,
      nameAuthorEdited: "",
      nameAuthorAdded: ""
    };
  },
  computed: {
    filteredAuthors() {
      return this.$store.getters["admin/filteredAuthors"](this.searchAuthor);
    },
    fieldAddEmpty() {
      return this.nameAuthorAdded == "" ? "Не может быть пустым" : "";
    }
  },
  methods: {
    authorEdit(idAuthor, authorName) {
      this.nameAuthorEdited = authorName;
      this.idAuthorEdited = idAuthor;
    },
    authorEditDone() {
      this.$store.dispatch("admin/UPDATE_AUTHOR_API", {
        idAuthor: this.idAuthorEdited,
        authorName: this.nameAuthorEdited
      });
      this.authorEditCancel();
    },
    authorEditCancel() {
      this.nameAuthorEdited = "";
      this.idAuthorEdited = null;
    },
    authorAddDone() {
      if (this.nameAuthorAdded !== "") {
        this.$store.dispatch("admin/ADD_AUTHOR_API", {
          authorName: this.nameAuthorAdded
        });
        this.authorAddCancel();
      }
    },
    authorAddCancel() {
      this.nameAuthorAdded = "";
    }
  },
  mounted() {
    this.$store.dispatch("admin/GET_AUTHORS_API");
  },
  components: {
    Head
  }
};
</script>

<style scoped>
.input-wrapper {
  padding-left: 0;
  padding-right: 0;
}
.add-btns {
  width: 36px;
}
</style>
