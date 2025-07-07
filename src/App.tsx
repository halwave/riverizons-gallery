import { useState, useEffect } from 'react';
import { fetchTestArtworks } from './utils/api';
import type { ArtworkCategory } from './types/artwork';

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState<
    Array<{
      id: string;
      title: string;
      imageUrl: string;
      category: string;
    }>
  >([]);
  const [currentCategory, setCurrentCategory] =
    useState<ArtworkCategory>('traditional');

  // Load artworks when component mounts or category changes
  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true);
      try {
        const data = await fetchTestArtworks(currentCategory);
        setArtworks(data);
      } catch (error) {
        console.error('Failed to load artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, [currentCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-blue-600">
            Riverizons Gallery
          </h1>
          <nav className="mt-4">
            <ul className="flex gap-6">
              <li>
                <a href="#home" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#traditional"
                  className={`text-gray-700 hover:text-blue-600 ${
                    currentCategory === 'traditional' ? 'font-bold' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentCategory('traditional');
                  }}
                >
                  Traditional
                </a>
              </li>
              <li>
                <a
                  href="#digital"
                  className={`text-gray-700 hover:text-blue-600 ${
                    currentCategory === 'digital' ? 'font-bold' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentCategory('digital');
                  }}
                >
                  Digital
                </a>
              </li>
              <li>
                <a
                  href="#photography"
                  className={`text-gray-700 hover:text-blue-600 ${
                    currentCategory === 'photography' ? 'font-bold' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentCategory('photography');
                  }}
                >
                  Photography
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">
            {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}{' '}
            Art
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array(9)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-64 bg-gray-100 rounded-lg animate-pulse"
                    />
                  ))
              : artworks.map((artwork) => (
                  <div
                    key={artwork.id}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedArtwork(artwork.imageUrl)}
                  >
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <div className="mt-2">
                      <h3 className="font-semibold">{artwork.title}</h3>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>

      {selectedArtwork && (
        <div
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/90"
          onClick={() => setSelectedArtwork(null)}
        >
          <img
            src={selectedArtwork}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default App;
