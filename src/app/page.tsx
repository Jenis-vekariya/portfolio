import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const layouts = [
  { name: 'Beauty', description: 'Elegant and clean for fashion.', imageUrl: 'https://images.unsplash.com/photo-1735220984901-13ca4b5c7e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YmVhdXR5JTIwZmFzaGlvbnxlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'beauty fashion' },
  { name: 'Education', description: 'For modern learning platforms.', imageUrl: 'https://images.unsplash.com/photo-1622575402739-6e9edf8073c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'education learning' },
  { name: 'Medical', description: 'Professional and trustworthy.', imageUrl: 'https://images.unsplash.com/photo-1581578731565-fcdb660a4639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWRpY2FsJTIwaGVhbHRofGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'medical health' },
  { name: 'Agency', description: 'Modern and corporate look.', imageUrl: 'https://images.unsplash.com/photo-1621856625680-282ec3a17db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhZ2VuY3klMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'agency corporate' },
  { name: 'Marketing', description: 'Designed for high conversion.', imageUrl: 'https://images.unsplash.com/photo-1709715357549-f2d587846ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYXJrZXRpbmclMjBidXNpbmVzc3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'marketing business' },
  { name: 'Personal', description: 'To share your unique story.', imageUrl: 'https://images.unsplash.com/photo-1625470200594-ec5b607bf615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb25hbCUyMGJsb2d8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'personal blog' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="text-center py-16 md:py-24 lg:py-32 px-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">6 Layouts</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">Blog Home Page</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Choose the perfect layout for your next blog or website project.
            </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layouts.map((layout) => (
              <LayoutCard key={layout.name} {...layout} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
