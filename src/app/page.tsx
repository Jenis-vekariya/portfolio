
'use client';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { LayoutCard } from '@/components/layout-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Separator } from '@/components/ui/separator';
import { PreviewBanner, PreviewBannerProps } from '@/components/preview-banner';

const blogLayouts = [
  { 
    name: 'Beauty', 
    description: 'Elegant and clean for fashion.', 
    imageUrl: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v1.png', 
    imageHint: 'beauty fashion',
    liveUrl: 'https://lumineux-beauty.vercel.app',
    previews: [
      { name: 'Homepage v1', url: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v1.png' },
      { name: 'Homepage v2', url: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v2.png' },
      { name: 'Homepage v3', url: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v3.png' },
    ]
  },
  { name: 'Education', description: 'For modern learning platforms.', imageUrl: 'https://images.unsplash.com/photo-1622575402739-6e9edf8073c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'education learning', comingSoon: true },
  { name: 'Medical', description: 'Professional and trustworthy.', imageUrl: 'https://images.unsplash.com/photo-1581578731565-fcdb660a4639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWRpY2FsJTIwaGVhbHRofGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'medical health', comingSoon: true },
  { name: 'Agency', description: 'Modern and corporate look.', imageUrl: 'https://images.unsplash.com/photo-1621856625680-282ec3a17db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhZ2VuY3klMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'agency corporate', comingSoon: true },
  { name: 'Minimal', description: 'Clean, simple, and elegant.', imageUrl: 'https://images.unsplash.com/photo-1583743089482-c94651f20f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwY2xlYW58ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib-rb-4.1.0&q=80&w=1080', imageHint: 'minimalist clean', comingSoon: true },
  { name: 'Minimal v2', description: 'Another take on minimalism.', imageUrl: 'https://images.unsplash.com/photo-1646830970955-2d6db7395fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY3RhfGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib-rb-4.1.0&q=80&w=1080', imageHint: 'minimalist cta', comingSoon: true },
  { name: 'Marketing', description: 'Designed for high conversion.', imageUrl: 'https://images.unsplash.com/photo-1709715357549-f2d587846ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYXJrZXRpbmclMjBidXNpbmVzc3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'marketing business', comingSoon: true },
  { name: 'Personal', description: 'To share your unique story.', imageUrl: 'https://images.unsplash.com/photo-1625470200594-ec5b607bf615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb25hbCUyMGJsb2d8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib-rb-4.1.0&q=80&w=1080', imageHint: 'personal blog', comingSoon: true },
];

const postLayouts = [
  { name: 'Full Hero Image', description: 'A bold, image-forward design.', imageUrl: 'https://images.unsplash.com/photo-1513106021000-168e5f56609d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZXJvJTIwaW1hZ2V8ZW58MHx8fHwxNzUyMzI2OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'hero image', comingSoon: true },
  { name: 'Minimal Post', description: 'Content-focused with clean typography.', imageUrl: 'https://images.unsplash.com/photo-1653820278078-b48ce5bdc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY29udGVudHxlbnwwfHx8fDE3NTIzMjY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'minimalist content', comingSoon: true },
  { name: 'Wide Hero', description: 'Expansive header for dramatic effect.', imageUrl: 'https://images.unsplash.com/photo-1585932350398-48fdaaf20ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3aWRlJTIwaGVyb3xlbnwwfHx8fDE3NTIzMjY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'wide hero', comingSoon: true },
  { name: 'Default Post', description: 'A classic and balanced layout.', imageUrl: 'https://images.unsplash.com/photo-1724786594289-41ebbf53a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGF5b3V0fGVufDB8fHx8MTc1MjMyNjk4OXww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'classic layout', comingSoon: true },
  { name: 'Split Screen', description: 'Side-by-side content and imagery.', imageUrl: 'https://images.unsplash.com/photo-1614683554956-a6274374259b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzcGxpdCUyMHNjcmVlbnxlbnwwfHx8fDE3NTIzMjY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'split screen', comingSoon: true },
  { name: 'Author Focus', description: 'Highlights the writer and their bio.', imageUrl: 'https://images.unsplash.com/photo-1741242950696-091ff1c228c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwcm9maWxlfGVufDB8fHx8MTc1MjMyNjk4OHww&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'author profile', comingSoon: true },
];

export default function Home() {
  const [activeBanner, setActiveBanner] = useState<PreviewBannerProps | null>(null);
  const [bannerStyle, setBannerStyle] = useState<React.CSSProperties>({});
  const blogGridRef = useRef<HTMLDivElement>(null);
  const postGridRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>, layout: (typeof blogLayouts)[0] | (typeof postLayouts)[0], gridRef: React.RefObject<HTMLDivElement>) => {
    if (layout.comingSoon || !gridRef.current) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const card = e.currentTarget as HTMLDivElement;
    const grid = gridRef.current;

    const gridRect = grid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const top = card.offsetTop;
    const height = cardRect.height;
    const bannerHeight = height + 80; // Add 5rem (80px) padding
  
    setBannerStyle({ top: `${top}px`, height: `${bannerHeight}px`, transform: `translateY(-40px)` });

    setActiveBanner({
      name: layout.name,
      previews: 'previews' in layout ? layout.previews || [] : [],
      liveUrl: 'liveUrl' in layout ? layout.liveUrl || '#' : '#',
      onMouseLeave: handleMouseLeave
    });
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveBanner(null);
    }, 200);
  };
  
  const handleBannerEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };


  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="text-center py-16 md:py-24 lg:py-32 px-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">8 Layouts</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">Blog Home Page</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Choose the perfect layout for your next blog or website project.
            </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
          <div 
            ref={blogGridRef}
            className="relative" 
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {blogLayouts.map((layout) => (
                <div 
                  key={layout.name} 
                  className="flex flex-col items-center gap-4"
                  onMouseEnter={(e) => handleMouseEnter(e, layout, blogGridRef)}
                >
                  <h3 className="text-xl font-semibold tracking-tight">{layout.name}</h3>
                  <LayoutCard imageUrl={layout.imageUrl} imageHint={layout.imageHint} comingSoon={layout.comingSoon} />
                </div>
              ))}
            </div>
            {activeBanner && activeBanner.previews.length > 0 && blogGridRef.current && (
              <div onMouseEnter={handleBannerEnter} onMouseLeave={handleMouseLeave}>
                 <PreviewBanner {...activeBanner} style={bannerStyle} />
              </div>
            )}
          </div>
        </section>

        <Separator className="my-8" />

        <section className="text-center py-16 md:py-24 lg:py-32 px-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">6 Layouts</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">Post Page</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Select a post style that best fits your content.
            </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
           <div 
            ref={postGridRef}
            className="relative"
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {postLayouts.map((layout) => (
                <div key={layout.name} 
                  className="flex flex-col items-center gap-4"
                  onMouseEnter={(e) => handleMouseEnter(e, layout, postGridRef)}
                >
                  <h3 className="text-xl font-semibold tracking-tight">{layout.name}</h3>
                   <LayoutCard imageUrl={layout.imageUrl} imageHint={layout.imageHint} comingSoon={layout.comingSoon} />
                </div>
              ))}
            </div>
             {activeBanner && activeBanner.previews.length === 0 && postGridRef.current && (
              <div onMouseEnter={handleBannerEnter} onMouseLeave={handleMouseLeave}>
                 <PreviewBanner {...activeBanner} style={bannerStyle} />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
