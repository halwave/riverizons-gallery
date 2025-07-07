import type {
  Artwork,
  ArtworkCategory,
  ArtworkResponse,
} from '../types/artwork';

export const fetchArtworks = async (
  category: Artwork['category']
): Promise<Artwork[]> => {
  const response = await fetch(
    `https://not-sure-what-endpoint-yet.com/artworks?category=${category}`
  );
  const data: ArtworkResponse = await response.json();
  return data.artworks;
};

// Test data implementation
export const fetchTestArtworks = async (
  category?: Artwork['category']
): Promise<Artwork[]> => {
  // Simulated API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const testData: Record<Artwork['category'], Artwork[]> = {
    traditional: [
      {
        id: 'trad-001',
        title: 'Mountain Sunrise',
        description: 'Watercolor painting of a mountain sunrise',
        imageUrl: '/test-images/traditional/mountain-sunrise.jpg',
        category: 'traditional',
        isFeatured: true,
      },
      {
        id: 'trad-002',
        title: 'Forest Path',
        description: 'Oil painting of a forest path',
        imageUrl: '/test-images/traditional/forest-path.jpg',
        category: 'traditional',
        isFeatured: false,
      },
    ],
    digital: [
      {
        id: 'dig-001',
        title: 'Cyber Dreams',
        description: 'Digital art piece exploring cyberpunk themes',
        imageUrl: '/test-images/digital/cyber-dreams.jpg',
        category: 'digital',
        isFeatured: true,
      },
      {
        id: 'dig-002',
        title: 'Quantum Flow',
        description: 'Digital illustration of quantum mechanics',
        imageUrl: '/test-images/digital/quantum-flow.jpg',
        category: 'digital',
        isFeatured: false,
      },
    ],
    photography: [
      {
        id: 'photo-001',
        title: 'City Lights',
        description: 'Nighttime cityscape photography',
        imageUrl: '/test-images/photography/city-lights.jpg',
        category: 'photography',
        isFeatured: false,
      },
      {
        id: 'photo-002',
        title: 'Wildflower Field',
        description: 'Nature photography of wildflowers',
        imageUrl: '/test-images/photography/wildflower-field.jpg',
        category: 'photography',
        isFeatured: true,
      },
    ],
  };

  if (!category) {
    return Object.values(testData).flat();
  }

  return testData[category] || [];
};

export const getFeaturedArtworks = async (): Promise<Artwork[]> => {
  const allArtworks = await fetchTestArtworks();
  return allArtworks.filter((artwork) => artwork.isFeatured);
};
