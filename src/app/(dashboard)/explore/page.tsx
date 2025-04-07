import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const dummyStories = [
  {
    id: '1',
    title: 'The 2012 Delhi Case: Unheard Voices',
    summary: 'A deep look into the aftermath of the 2012 case from a lawyer’s perspective.',
    tags: ['Legal', 'India', '2012'],
    contributor: 'Adv. Sinha',
  },
  {
    id: '2',
    title: 'Unseen Struggles of Kashmiri Widows',
    summary: 'A journalist’s account of untold stories of widows in conflict regions.',
    tags: ['Conflict', 'Women', 'Journalism'],
    contributor: 'Ananya Roy',
  },
  {
    id: '3',
    title: 'Post-Riot Rehabilitation in Northeast Delhi',
    summary: 'Ground report from volunteers working in riot-affected zones.',
    tags: ['Riot', 'Rehabilitation'],
    contributor: 'Ravi Jha',
  },
]

export default function ExplorePage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Explore Stories</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyStories.map((story) => (
          <Card key={story.id} className="hover:shadow-md transition-all">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{story.title}</h2>
              <p className="text-sm text-muted-foreground">{story.summary}</p>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <p className="text-xs text-right text-muted-foreground">
                — {story.contributor}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
