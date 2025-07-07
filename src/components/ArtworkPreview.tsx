import { useState } from 'react'
import type { Artwork } from '../types/artwork'

interface ArtworkPreviewProps {
  artwork: Artwork;
  onPreview?: () => void;
}

export default function ArtworkPreview({ artwork, onPreview }: ArtworkPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Image clicked');
    setShowPreview(true);
    onPreview?.();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('Overlay clicked', e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      console.log('Closing preview');
      setShowPreview(false);
      onPreview?.();
    }
  };

  return (
    <div
      className="group relative cursor-pointer"
      onClick={handleImageClick}
    >
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="aspect-square w-full rounded-lg object-cover transition-transform group-hover:scale-105"
      />
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handleOverlayClick}
        >
          <img
            src={artwork.imageUrl}
            alt={`${artwork.title} (Full View)`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Full image clicked');
            }}
          />
        </div>
      )}
    </div>
  );
}
