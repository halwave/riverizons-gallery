// pages/Photography.tsx
import { useState, useEffect } from 'react'
import type { Artwork } from '../types/artwork'
import { fetchTestArtworks } from '../utils/api'
import ArtworkPreview from '../components/ArtworkPreview'

export default function Photography() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true)
      try {
        const photographyArtworks = await fetchTestArtworks('photography')
        setArtworks(photographyArtworks)
      } catch (error) {
        console.error('Failed to load photography artworks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArtworks()
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Photography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(9).fill(null).map((_, i) => (
            <div key={i} className="w-full h-64 bg-gray-100 rounded-lg animate-pulse" />
          ))
        ) : (
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
