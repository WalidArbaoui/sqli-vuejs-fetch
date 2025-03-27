export interface Manga {
  id: string;
  title: string;
  altTitles: {}[];
  availableTranslatedLanguages: string[];
  description: {};
  tags: {}[];
  cover:
    | {
        type: string;
        id: string;
        attributes?: {
          fileName: string;
        };
      }
    | undefined;
}

export interface MangaRequest {
  id: string;
  attributes: {
    title: {
      en: string;
    };
    altTitles: {}[];
    availableTranslatedLanguages: string[];
    description: {};
    tags: {
      id: string;
      attributes: {
        group: string;
        name: {};
      };
    }[];
  };
  relationships: {
    type: string;
    id: string;
    attributes?: {
      fileName: string;
    };
  }[];
}
