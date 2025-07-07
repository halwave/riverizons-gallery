import { useEffect, useState } from "react"
import ArtworkPreview from "../components/ArtworkPreview"
import type { Artwork } from "../types/artwork"
import { fetchTestArtworks } from "../utils/api"

export default function Traditional() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true)
      try {
        const traditionalArtworks = await fetchTestArtworks('traditional')
        setArtworks(traditionalArtworks)
      } catch (error) {
        console.error('Failed to load traditional artworks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadArtworks()
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Traditional Art</h2>
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
