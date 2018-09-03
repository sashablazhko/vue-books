<template>
  <div class="adminauthor">
    <Head>
      <v-text-field 
        v-model="searchAuthor" 
        class="inp"
        label="Автор"
        solo
        light
      ></v-text-field>
    </Head>
    <v-content></v-content>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>

          <v-toolbar flat color="white">
            <v-toolbar-title>Авторы</v-toolbar-title>
            <v-divider
              class="mx-2"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark class="mb-2">Добавить автора</v-btn>
              <v-card>
                <form @submit="authorEditDone">
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field
                            v-model="editedAuthor.author_name" 
                            label="Автор"
                            :error-messages="errors.collect('edit_author_field')"
                            v-validate="'required|min:5'"
                            data-vv-name="edit_author_field"
                            data-vv-as="автора"
                            key="edit-author"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Отмена</v-btn>
                    <v-btn color="blue darken-1" flat type="submit">Сохранить</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="filteredAuthors"
            :pagination.sync="pagination"
            item-key="id_author"
            hide-actions
            class="elevation-1"
          >
            <template slot="headers" slot-scope="props">
              <tr>
                <th
                  v-for="header in props.headers"
                  :key="header.text"
                  :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(header.value)"
                >
                  <v-icon small>arrow_upward</v-icon>
                  {{ header.text }}
                </th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id_author }}</td>
              <td>{{ props.item.author_name }}</td>
              <td class="justify-center layout px-0">
                <v-icon
                  small
                  class="mr-2"
                  @click="editAuthor(props.item)"
                >
                  edit
                </v-icon>
                <v-icon
                  small
                  @click="deleteAuthor(props.item)"
                >
                  delete
                </v-icon>
              </td>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="warning" icon="warning">
                Нет соответствий с поиском
              </v-alert>
            </template>
          </v-data-table>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "authors",
  data: () => ({
    searchAuthor: "",
    dialog: false,
    headers: [
      {
        text: "ID",
        align: "left",
        value: "id_author"
      },
      { text: "ФИО", align: "left", value: "author_name" },
      { text: "Действия", align: "center", value: "act", sortable: false }
    ],
    editedIndex: -1,
    editedAuthor: {
      author_name: ""
    },
    defaultAuthor: {
      author_name: ""
    },
    pagination: {
      sortBy: "id_author",
      descending: true,
      rowsPerPage: -1
    }
  }),

  computed: {
    filteredAuthors() {
      return this.$store.getters["admin/filteredAuthors"](this.searchAuthor);
    },
    formTitle() {
      return this.editedIndex === -1 ? "Добавить автора" : "Изменить автора";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("admin/GET_AUTHORS_API");
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },

    editAuthor(author) {
      this.editedIndex = this.filteredAuthors.indexOf(author);
      this.editedAuthor = Object.assign({}, author);
      this.dialog = true;
    },

    deleteAuthor(author) {
      if (confirm("Точно хотите удалить?")) {
        this.$store.dispatch("admin/DELETE_AUTHOR_API", {
          idAuthor: author.id_author
        });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedAuthor = Object.assign({}, this.defaultAuthor);
        this.editedIndex = -1;
        this.$validator.reset();
      }, 300);
    },

    async authorEditDone(e) {
      e.preventDefault();
      let res = await this.$validator.validate("edit_author_field");
      if (res) {
        if (this.editedIndex > -1) {
          // Object.assign(
          //   this.filteredAuthors[this.editedIndex],
          //   this.editedAuthor
          // );
          this.$store.dispatch("admin/UPDATE_AUTHOR_API", {
            idAuthor: this.editedAuthor.id_author,
            authorName: this.editedAuthor.author_name
          });
        } else {
          // this.filteredAuthors.push(this.editedAuthor);
          this.$store.dispatch("admin/ADD_AUTHOR_API", {
            authorName: this.editedAuthor.author_name
          });
        }
        this.close();
      }
    }
  },
  components: {
    Head
  }
};
</script>

<style scoped>
</style>
