import type { Manga, MangaRequest } from "@/models/manga.type";
import { ref } from "vue";

interface MangaResponse {
  mangas: Manga[];
  error: string;
  loading: boolean;
  totalPages: number;
  currentPage: number;
  fetchMangas: any;
}

export function useMangaFetch<MangaResponse>() {
  const apiUrl = "https://api.mangadex.org/manga";
  const mangas = ref<Manga[]>([]);
  const error = ref(null);
  const loading = ref(false);
  const totalPages = ref(0);
  const currentPage = ref(0);

  const fetchMangas = async (page = 0, limit = 15) => {
    loading.value = true;
    error.value = null;

    // https://api.mangadex.org/manga?limit=10&offset=0&contentRating%5B%5D=safe
    try {
      const response = await fetch(
        `${apiUrl}?offset=${page}&limit=${limit}&contentRating%5B%5D=safe&includes[]=cover_art`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch mangas: ${response.statusText}`);
      }

      const data = await response.json();
      mangas.value = data.data.map(dataMapper) || [];
      console.log("####### Total Data", data.total);
      totalPages.value = Math.ceil(data.total / limit);
      console.log("####### Total Data", totalPages.value);
      currentPage.value = page;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { mangas, error, loading, totalPages, currentPage, fetchMangas };
}

const dataMapper = (data: MangaRequest): Manga => {
  return {
    id: data.id,
    title: data.attributes.title.en,
    altTitles: data.attributes.altTitles,
    availableTranslatedLanguages: data.attributes.availableTranslatedLanguages,
    description: data.attributes.description,
    tags: data.attributes.tags,
    cover: data.relationships.find((rel: any) => rel.type === "cover_art"),
  };
};
