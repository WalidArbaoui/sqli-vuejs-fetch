<script setup lang="ts">
defineProps<{
  totalPages: number;
  fetchMangas: any;
  currentPage: number;
}>();
</script>

<template>
  <div class="pagination">
    <button @click="fetchMangas(currentPage - 1)" :disabled="currentPage === 0">
      &larr; Previous
    </button>

    <span>Total of {{ totalPages }} pages</span>

    <button @click="fetchMangas(currentPage + 1)" :disabled="currentPage === totalPages">
      Next &rarr;
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
