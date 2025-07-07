import type { Artwork, ArtworkResponse } from '../types/artwork';

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
  category: Artwork['category']
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
      },
      {
        id: 'trad-002',
        title: 'Forest Path',
        description: 'Oil painting of a forest path',
        imageUrl: '/test-images/traditional/forest-path.jpg',
        category: 'traditional',
      },
    ],
    digital: [
      {
        id: 'dig-001',
        title: 'Cyber Dreams',
        description: 'Digital art piece exploring cyberpunk themes',
        imageUrl: '/test-images/digital/cyber-dreams.jpg',
        category: 'digital',
      },
      {
        id: 'dig-002',
        title: 'Quantum Flow',
        description: 'Digital illustration of quantum mechanics',
        imageUrl: '/test-images/digital/quantum-flow.jpg',
        category: 'digital',
      },
    ],
    photography: [
      {
        id: 'photo-001',
        title: 'City Lights',
        description: 'Nighttime cityscape photography',
        imageUrl: '/test-images/photography/city-lights.jpg',
        category: 'photography',
      },
      {
        id: 'photo-002',
        title: 'Wildflower Field',
        description: 'Nature photography of wildflowers',
        imageUrl: '/test-images/photography/wildflower-field.jpg',
        category: 'photography',
      },
    ],
    featured: [],
  };

  return testData[category] || [];
};
