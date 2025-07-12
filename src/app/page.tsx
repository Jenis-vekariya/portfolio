import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const layouts = [
  { name: 'Beauty', description: 'Elegant and clean.', imageUrl: 'https://placehold.co/600x450', imageHint: 'beauty fashion' },
  { name: 'Education', description: 'For learning platforms.', imageUrl: 'https://placehold.co/600x450', imageHint: 'education learning' },
  { name: 'Medical', description: 'Professional and trustworthy.', imageUrl: 'https://placehold.co/600x450', imageHint: 'medical health' },
  { name: 'Agency', description: 'Modern and corporate.', imageUrl: 'https://placehold.co/600x450', imageHint: 'agency corporate' },
  { name: 'Minimal', description: 'Content-focused design.', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist clean' },
  { name: 'Minimal v2', description: 'Includes a clear CTA.', imageUrl: 'https://placehold.co/600x450', imageHint: 'minimalist cta' },
  { name: 'Marketing', description: 'Designed for conversion.', imageUrl: 'https://placehold.co/600x450', imageHint: 'marketing business' },
  { name: 'Personal', description: 'Share your story.', imageUrl: 'https://placehold.co/600x450', imageHint: 'personal blog' },
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
