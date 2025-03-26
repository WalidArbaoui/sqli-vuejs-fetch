<script setup lang="ts">
import type { Manga } from "@/models/manga.type";

defineProps<{
  id: string;
  title: string;
}>();
</script>

<template>
  <div>
    <div>
      <!-- <img :src="poster" :alt="title" /> -->
    </div>
    <h4>{{ title }}</h4>
  </div>
</template>

<style scoped></style>
