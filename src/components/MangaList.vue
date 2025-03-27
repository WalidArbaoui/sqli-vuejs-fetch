<script setup lang="ts">
import { useMangaFetch } from "@/composables/useMangaFetch";
import MangaCard from "./MangaCard.vue";
import { onMounted } from "vue";
import Pagination from "./Pagination.vue";
import { Icon } from "@iconify/vue";

const { mangas, error, loading, totalPages, currentPage, fetchMangas } = useMangaFetch();

onMounted(() => {
  fetchMangas(0);
});
</script>

<template>
  <div class="manga-list">
    <div v-if="loading" class="loading">
      <Icon icon="eos-icons:bubble-loading" width="62" height="62" color="black" />
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <MangaCard v-else v-for="manga in mangas" :key="manga.title" v-bind="manga" />
  </div>
  <Pagination
    v-if="!loading"
    :totalPages="totalPages"
    :fetchMangas="fetchMangas"
    :currentPage="currentPage"
  />
</template>

<style scoped>
.manga-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
