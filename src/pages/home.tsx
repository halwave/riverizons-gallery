import ArtworkPanel from "../components/ArtworkPanel"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Welcome to Riverizons Gallery</h2>
        <p className="text-gray-600">
          A showcase of traditional, digital, and photographic art from Halwave.
        </p>
      </section>

      <ArtworkPanel displayType="featured" />
    </div>
  )
}
