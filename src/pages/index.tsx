import { type ReactNode } from 'react'
import { useState, useEffect } from 'react'
import ArtworkPreview from '../components/ArtworkPreview'
import type { Artwork } from '../types/artwork'
import { fetchArtworks } from '../utils/api'

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const featuredArtworks = await fetchArtworks('featured' as Artwork['category'])
        setArtworks(featuredArtworks)
      } catch (error) {
        console.error('Failed to load artworks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArtworks()
  }, [])

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Welcome to Riverizons Gallery</h2>
        <p className="text-gray-600">
          A showcase of traditional, digital, and photographic art from Halwave.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="w-full h-64 bg-gray-100 rounded-lg animate-pulse" />
          ) : (
            artworks.map(artwork => (
              <ArtworkPreview key={artwork.id} artwork={artwork} />
            ))
          )}
        </div>
      </section>
    </div>
  )
}
