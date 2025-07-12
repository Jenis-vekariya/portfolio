import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';

const layouts = [
  { name: 'Beauty Blog', imageUrl: 'https://placehold.co/600x450', imageHint: 'beauty fashion' },
  { name: 'Education Blog', imageUrl: 'https://placehold.co/600x450', imageHint: 'education learning' },
  { name: 'Medical Blog', imageUrl: 'https://placehold.co/600x450', imageHint: 'medical health' },
  { name: 'Agency Blog', imageUrl: 'https://placehold.co/600x450', imageHint: 'agency corporate' },
  { name: 'Minimal', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist clean' },
  { name: 'Minimal v2', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist cta' },
  { name: 'Marketing', imageUrl: 'https://placehold.co/600x450', imageHint: 'marketing business' },
  { name: 'Personal', imageUrl: 'https://placehold.co/600x450', imageHint: 'personal blog' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-headline">
              Layout Lab
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our collection of professionally designed blog layouts.
              Pick one and start your journey.
            </p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
