<script setup lang="ts">
import type { Manga } from "@/models/manga.type";

defineProps<Manga>();
</script>

<template>
  <div class="manga-card">
    <router-link :to="{ name: 'single', params: { id: id } }">
      <div>
        <img
          :src="`https://mangadex.org/covers/${id}/${cover?.attributes?.fileName}.256.jpg`"
          :alt="title"
        />
      </div>
      <h4>{{ title }}</h4>
    </router-link>
  </div>
</template>

<style scoped>
.manga-card:hover div {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.manga-card img {
  display: block;
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 1rem;
}

.manga-card h4 {
  color: #040720;
}

a {
  text-decoration: none;
}
</style>
