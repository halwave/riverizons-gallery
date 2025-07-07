import { useState, useEffect } from 'react'
import ArtworkPreview from '../components/ArtworkPreview'
import {fetchArtworks } from '../utils/api'
import type { Artwork } from '../types/artwork'

export default function Photography() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const photographyArtworks = await fetchArtworks('photography')
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
      <h2 className="text-3xl font-bold">Photography Art</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(9).fill(null).map((_, i) => (
            <div key={i} className="w-full h-64 bg-gray-100 rounded-lg animate-pulse" />
          ))
        ) : (
          artworks.map(artwork => (
            <ArtworkPreview key={artwork.id} artwork={artwork} />
          ))
        )}
      </div>
    </div>
  )
}
