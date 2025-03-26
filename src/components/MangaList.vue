<script setup lang="ts">
import { useMangaFetch } from "@/composables/useMangaFetch";
import MangaCard from "./MangaCard.vue";
import { onMounted } from "vue";
const { mangas, error, loading, totalPages, currentPage, fetchMangas } = useMangaFetch();

onMounted(() => {
  fetchMangas(1, 10);
});
</script>

<template>
  <div class="manga-list">
    <MangaCard
      v-for="manga in mangas"
      :key="manga.attributes.title.en"
      :title="manga.attributes.title.en"
    />
  </div>
</template>

<style scoped>
.manga-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
