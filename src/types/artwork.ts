export type ArtworkCategory =
  | 'traditional'
  | 'digital'
  | 'photography'
  | 'featured';

export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ArtworkCategory;
}

export interface ArtworkResponse {
  artworks: Artwork[];
}
