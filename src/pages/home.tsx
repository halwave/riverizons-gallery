import { useEffect, useState } from "react"
import ArtworkPreview from "../components/ArtworkPreview"
import type { Artwork } from "../types/artwork"
import { fetchTestArtworks } from "../utils/api"

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true)
      try {
        const featuredArtworks = await fetchTestArtworks('featured')
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {loading ? null : (
            artworks.map((artwork: Artwork) => (
              <ArtworkPreview
                key={artwork.id}
                artwork={artwork}
                onPreview={() => setSelectedArtwork(artwork)}
              />
            ))
          )}
        </div>
      </section>
    </div>
  )
}
