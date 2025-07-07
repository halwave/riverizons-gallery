import { useState } from 'react';
import type { Artwork } from '../types/artwork';

interface ArtworkPreviewProps {
  artwork: Artwork;
}

export default function ArtworkPreview({ artwork }: ArtworkPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => setShowPreview(true)}
    >
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="aspect-square w-full rounded-lg object-cover transition-transform group-hover:scale-105"
      />

      {showPreview && (
        <div
          className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/90"
          onClick={() => setShowPreview(false)}
        >
          <img
            src={artwork.imageUrl}
            alt={`${artwork.title} (Full View)`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
