import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 space-y-6 bg-muted">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Preserving Forgotten Stories.
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-muted-foreground">
          A decentralized platform to document, verify, and resurface underreported stories — permanently and transparently.
        </p>
        <div className="flex gap-4">
          <Link href="/explore">
            <Button variant="default">Explore Stories</Button>
          </Link>
          <Link href="/submit">
            <Button variant="outline">Submit a Story</Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            ['📤', 'Submit Story', 'Survivors, lawyers, and journalists submit verified stories.'],
            ['🔍', 'Verify', 'Contributors are validated and tagged using decentralized identity.'],
            ['🌍', 'Resurface', 'Users explore the archive and bring attention to forgotten events.']
          ].map(([icon, title, desc]) => (
            <div key={title} className="p-4 border rounded-xl bg-background shadow-sm">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-4 py-12 bg-background border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Ready to contribute or explore?</h3>
          <div className="flex gap-4">
            <Link href="/submit"><Button>Submit a Story</Button></Link>
            <Link href="/explore"><Button variant="outline">Browse Stories</Button></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
