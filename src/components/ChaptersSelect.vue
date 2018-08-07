<template>
  <div>
    <p v-if="chapters.length == 1">Тут главу выбирать не прийдется ;)</p>
    <select v-else value="selectedChapter" @change="changeSelectedChapter">
      <option 
        v-for="chapter in chapters"
        :key="chapter.id_chapter"
        :value="chapter.id_chapter">
        {{ chapter.chapter_name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ChaptersSelect",
  props: ["chapters"],
  methods: {
    changeSelectedChapter(e) {
      this.$emit("changeSelectedChapter", e.target.value);
    }
  }
};
</script>
