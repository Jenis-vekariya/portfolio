'use client';
import { useState } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Separator } from '@/components/ui/layout/separator';
import { PreviewBanner } from '@/components/preview-banner';
import { LayoutGrid } from '@/components/layout-grid';
import { blogLayouts, postLayouts } from '@/data/layouts';
import type { Layout } from '@/types';

export default function Home() {
  const [activeLayout, setActiveLayout] = useState<Layout | null>(null);
  const [bannerStyle, setBannerStyle] = useState<React.CSSProperties>({});
  
  const handleLayoutClick = (layout: Layout, cardElement: HTMLDivElement) => {
    if (layout.comingSoon || !layout.previews) {
      setActiveLayout(null);
      return;
    }

    if (activeLayout?.name === layout.name) {
      setActiveLayout(null);
      return;
    }

    const top = cardElement.offsetTop;
    const height = cardElement.getBoundingClientRect().height;
    const bannerHeight = height + 80;

    setBannerStyle({ top: `${top}px`, height: `${bannerHeight}px`, transform: `translateY(-40px)` });
    setActiveLayout(layout);
  };
  
  const clearActiveLayout = () => {
    setActiveLayout(null);
  };

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
          <LayoutGrid
            layouts={blogLayouts}
            onLayoutClick={handleLayoutClick}
            gridType="blog"
          >
            {activeLayout && blogLayouts.some(l => l.name === activeLayout.name) && (
              <PreviewBanner
                layout={activeLayout}
                style={bannerStyle}
                onClose={clearActiveLayout}
              />
            )}
          </LayoutGrid>
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
           <LayoutGrid
            layouts={postLayouts}
            onLayoutClick={handleLayoutClick}
            gridType="post"
          >
            {activeLayout && postLayouts.some(l => l.name === activeLayout.name) && (
               <PreviewBanner
                layout={activeLayout}
                style={bannerStyle}
                onClose={clearActiveLayout}
              />
            )}
          </LayoutGrid>
        </section>
      </main>
      <Footer />
    </div>
  );
}
