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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:py-32 lg:px-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              8 Layouts
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mt-4">
              Blog Home Page
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Choose the perfect layout for your next blog or website project.
            </p>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
