import { useEffect, useState } from 'react'
import type { Artwork, ArtworkDisplayType } from '../types/artwork'
import { fetchTestArtworks, getFeaturedArtworks } from '../utils/api';
import ArtworkPreview from './ArtworkPreview';

interface ArtworkPanelProps {
  displayType: ArtworkDisplayType;
}

export default function ArtworkPanel({ displayType  }: ArtworkPanelProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  
    useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true)
      try {
        const loadedArtworks = displayType === "featured"
          ? await getFeaturedArtworks()
          : await fetchTestArtworks(displayType)
        setArtworks(loadedArtworks)
      } catch (error) {
        console.error(`Failed to load ${displayType} artworks:`, error)
      } finally {
        setLoading(false)
      }
    }
    loadArtworks()
  }, [displayType])
  
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">{displayType.charAt(0).toUpperCase() + displayType.slice(1)} Art</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? null : (
            artworks.map(artwork => (
              <ArtworkPreview
                key={artwork.id}
                artwork={artwork}
                onPreview={() => setSelectedArtwork(artwork)}
              />
            ))
          )}
        </div>
      </div>
    )
}
