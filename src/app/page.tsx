import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const layouts = [
  { name: 'Beauty', imageUrl: 'https://placehold.co/600x450', imageHint: 'beauty fashion' },
  { name: 'Education', imageUrl: 'https://placehold.co/600x450', imageHint: 'education learning' },
  { name: 'Medical', imageUrl: 'https://placehold.co/600x450', imageHint: 'medical health' },
  { name: 'Agency', imageUrl: 'https://placehold.co/600x450', imageHint: 'agency corporate' },
  { name: 'Minimal', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist clean' },
  { name: 'Minimal v2', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist cta' },
  { name: 'Marketing', imageUrl: 'https://placehold.co/600x450', imageHint: 'marketing business' },
  { name: 'Personal', imageUrl: 'https://placehold.co/600x450', imageHint: 'personal blog' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <p className="text-lg text-muted-foreground">
              8 Layouts
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-headline mt-2">
              Blog Home Page
            </h1>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
