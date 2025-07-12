import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const layouts = [
  { name: 'Beauty', description: 'Elegant and clean.', imageUrl: 'https://images.unsplash.com/photo-1735220984901-13ca4b5c7e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YmVhdXR5JTIwZmFzaGlvbnxlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'beauty fashion' },
  { name: 'Education', description: 'For learning platforms.', imageUrl: 'https://images.unsplash.com/photo-1622575402739-6e9edf8073c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'education learning' },
  { name: 'Medical', description: 'Professional and trustworthy.', imageUrl: 'https://images.unsplash.com/photo-1581578731565-fcdb660a4639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWRpY2FsJTIwaGVhbHRofGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'medical health' },
  { name: 'Agency', description: 'Modern and corporate.', imageUrl: 'https://images.unsplash.com/photo-1621856625680-282ec3a17db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhZ2VuY3klMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'agency corporate' },
  { name: 'Minimal', description: 'Content-focused design.', imageUrl: 'https://images.unsplash.com/photo-1583743089482-c94651f20f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwY2xlYW58ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'minimalist clean' },
  { name: 'Minimal v2', description: 'Includes a clear CTA.', imageUrl: 'https://images.unsplash.com/photo-1646830970955-2d6db7395fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY3RhfGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'minimalist cta' },
  { name: 'Marketing', description: 'Designed for conversion.', imageUrl: 'https://images.unsplash.com/photo-1709715357549-f2d587846ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYXJrZXRpbmclMjBidXNpbmVzc3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'marketing business' },
  { name: 'Personal', description: 'Share your story.', imageUrl: 'https://images.unsplash.com/photo-1625470200594-ec5b607bf615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb25hbCUyMGJsb2d8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'personal blog' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {layouts.map((layout) => (
              <div key={layout.name} className="flex flex-col gap-4">
                 <h3 className="font-semibold text-card-foreground text-lg text-center">{layout.name}</h3>
                 <LayoutCard {...layout} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
