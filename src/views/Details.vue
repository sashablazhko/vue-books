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
      <h1>{{ selectedBook.title }}</h1>
      <h2>({{ selectedBook.year}})</h2>
      <img :src="require(`@/assets/img/posters/${selectedBook.poster}`)" :alt="`Poster for ${selectedBook.title}`">
      <p>{{ selectedBook.description }}</p>
    </section>
    <div>
      <iframe :src="`https://www.youtube-nocookie.com/embed/${selectedBook.trailer}?rel=0&amp;cotrols=0&amp;showinfo=0`" 
        frameBorder="0" 
        allowFullScreen 
        :title="`Trailer for ${selectedBook.title}`"  />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";

export default {
  name: "Details",
  computed: {
    selectedBook() {
      return this.$store.getters.selectedBook(this.$route.params.id);
    }
  },
  components: {
    Head
  }
};
</script>
