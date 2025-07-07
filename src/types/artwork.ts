export type ArtworkCategory = 'traditional' | 'digital' | 'photography';
export type ArtworkDisplayType = ArtworkCategory | 'featured';

export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ArtworkCategory;
  isFeatured: boolean;
}

export interface ArtworkResponse {
  artworks: Artwork[];
}
