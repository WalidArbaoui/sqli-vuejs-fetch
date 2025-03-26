import { ref } from "vue";

export function useMangaFetch() {
  const apiUrl = "https://api.mangadex.org/manga";
  const mangas = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const totalPages = ref(0);
  const currentPage = ref(0);

  const fetchMangas = async (page = 0, limit = 10) => {
    loading.value = true;
    error.value = null;

    // https://api.mangadex.org/manga?limit=10&offset=0&contentRating%5B%5D=safe
    try {
      const response = await fetch(
        `${apiUrl}?offset=${page}&limit=${limit}&contentRating%5B%5D=safe`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch mangas: ${response.statusText}`);
      }

      const data = await response.json();
      mangas.value = data.data || [];
      totalPages.value = Math.ceil(data.total / limit);
      currentPage.value = page;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { mangas, error, loading, totalPages, currentPage, fetchMangas };
}
