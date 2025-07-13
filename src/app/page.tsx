'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ExternalLink, Eye, LayoutTemplate, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Preview = {
  name: string;
  url: string;
};

type Layout = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  comingSoon?: boolean;
  liveUrl?: string;
  previews?: Preview[];
};

const blogLayouts: Layout[] = [
  {
    name: 'Beauty',
    description: 'Elegant and clean for fashion.',
    imageUrl: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v1.png',
    imageHint: 'beauty fashion',
    liveUrl: 'https://lumineux-beauty.vercel.app/',
    previews: [
      { name: 'Homepage v1', url: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v1.png' },
      { name: 'Homepage v2', url: 'https://storage.googleapis.com/project-isa-resources/flexiblog/lumineux-v2.png' },
      { name: 'Homepage v3', url: '/images/lumineux-v3.png' },
    ],
  },
  {
    name: 'Education',
    description: 'For modern learning platforms.',
    imageUrl:
      'https://images.unsplash.com/photo-1622575402739-6e9edf8073c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'education learning',
    comingSoon: true,
  },
  {
    name: 'Medical',
    description: 'Professional and trustworthy.',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731565-fcdb660a4639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtZWRpY2FsJTIwaGVhbHRofGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'medical health',
    comingSoon: true,
  },
  {
    name: 'Agency',
    description: 'Modern and corporate look.',
    imageUrl:
      'https://images.unsplash.com/photo-1621856625680-282ec3a17db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhZ2VuY3klMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'agency corporate',
    comingSoon: true,
  },
  {
    name: 'Minimal',
    description: 'Clean, simple, and elegant.',
    imageUrl:
      'https://images.unsplash.com/photo-1583743089482-c94651f20f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwY2xlYW58ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'minimalist clean',
    comingSoon: true,
  },
  {
    name: 'Minimal v2',
    description: 'Another take on minimalism.',
    imageUrl:
      'https://images.unsplash.com/photo-1646830970955-2d6db7395fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY3RhfGVufDB8fHx8MTc1MjMyNjM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'minimalist cta',
    comingSoon: true,
  },
  {
    name: 'Marketing',
    description: 'Designed for high conversion.',
    imageUrl:
      'https://images.unsplash.com/photo-1709715357549-f2d587846ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYXJrZXRpbmclMjBidXNpbmVzc3xlbnwwfHx8fDE3NTIzMjYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'marketing business',
    comingSoon: true,
  },
  {
    name: 'Personal',
    description: 'To share your unique story.',
    imageUrl:
      'https://images.unsplash.com/photo-1625470200594-ec5b607bf615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwZXJzb25hbCUyMGJsb2d8ZW58MHx8fHwxNzUyMzI2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'personal blog',
    comingSoon: true,
  },
];

const postLayouts: Layout[] = [
  {
    name: 'Full Hero Image',
    description: 'A bold, image-forward design.',
    imageUrl:
      'https://images.unsplash.com/photo-1513106021000-168e5f56609d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZXJvJTIwaW1hZ2V8ZW58MHx8fHwxNzUyMzI2OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'hero image',
    comingSoon: true,
  },
  {
    name: 'Minimal Post',
    description: 'Content-focused with clean typography.',
    imageUrl:
      'https://images.unsplash.com/photo-1653820278078-b48ce5bdc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwY29udGVudHxlbnwwfHx8fDE3NTIzMjY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'minimalist content',
    comingSoon: true,
  },
  {
    name: 'Wide Hero',
    description: 'Expansive header for dramatic effect.',
    imageUrl:
      'https://images.unsplash.com/photo-1585932350398-48fdaaf20ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3aWRlJTIwaGVyb3xlbnwwfHx8fDE3NTIzMjY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'wide hero',
    comingSoon: true,
  },
  {
    name: 'Default Post',
    description: 'A classic and balanced layout.',
    imageUrl:
      'https://images.unsplash.com/photo-1724786594289-41ebbf53a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGF5b3V0fGVufDB8fHx8MTc1MjMyNjk4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'classic layout',
    comingSoon: true,
  },
  {
    name: 'Split Screen',
    description: 'Side-by-side content and imagery.',
    imageUrl:
      'https://images.unsplash.com/photo-1614683554956-a6274374259b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzcGxpdCUyMHNjcmVlbnxlbnwwfHx8fDE3NTIzMjY5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'split screen',
    comingSoon: true,
  },
  {
    name: 'Author Focus',
    description: 'Highlights the writer and their bio.',
    imageUrl:
      'https://images.unsplash.com/photo-1741242950696-091ff1c228c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwcm9maWxlfGVufDB8fHx8MTc1MjMyNjk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'author profile',
    comingSoon: true,
  },
];

type LayoutCardProps = {
  imageUrl: string;
  imageHint: string;
  comingSoon?: boolean;
};

function LayoutCard({
  imageUrl,
  imageHint,
  comingSoon = false,
}: LayoutCardProps) {
  if (comingSoon) {
    const cardContent = (
      <Card className="overflow-hidden rounded-lg h-full flex flex-col cursor-not-allowed">
        <div className="relative aspect-[4/3] w-full flex items-center justify-center bg-muted/50 p-4">
           <div 
             className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20"
           />
          <h3 className="text-2xl font-bold text-center text-muted-foreground z-10">
            Coming Soon
          </h3>
        </div>
      </Card>
    );

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full h-full">{cardContent}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>This layout is coming soon!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  const cardContent = (
    <Card className="overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl}
          alt={`Preview of a layout`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </Card>
  );

  return (
    <div className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
      {cardContent}
    </div>
  );
}

type PreviewBannerProps = {
  layout: Layout;
  style?: React.CSSProperties;
  onClose: () => void;
};

function PreviewBanner({ layout, style, onClose }: PreviewBannerProps) {
  const { name, previews, liveUrl } = layout;

  if (!previews || previews.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute left-0 right-0 z-10 mx-auto w-[calc(100%+2rem)] -translate-x-4 p-4 overflow-hidden"
      style={style}
    >
      <div className="bg-background/90 backdrop-blur-sm border rounded-xl shadow-2xl h-full w-full flex flex-col justify-center transition-all duration-300 animate-in fade-in slide-in-from-top-5 p-6 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/50 hover:bg-background/80 text-foreground hover:text-foreground z-20"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
            <LayoutTemplate className="h-6 w-6 text-primary" />
            {name} Previews
          </h3>
        </div>

        <div className="flex items-center justify-center gap-8 h-full">
          {previews.map((preview) => (
            <div
              key={preview.name}
              className="group/preview flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="relative w-[250px] h-[188px] rounded-lg overflow-hidden border-2 border-transparent group-hover/preview:border-primary transition-all duration-300 shadow-md group-hover/preview:shadow-xl">
                <Image
                  src={preview.url}
                  alt={`Preview of ${preview.name}`}
                  width={250}
                  height={188}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover/preview:scale-105"
                  sizes="250px"
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-sm font-medium text-foreground">{preview.name}</h4>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-4 text-center ml-4 pl-8 border-l">
            <Button asChild size="lg" className="w-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out font-bold text-shadow-sm">
              <Link href={liveUrl || '#'} target="_blank" rel="noopener noreferrer" className='text-white/90'>
                <Eye className="mr-2 h-4 w-4" />
                Live Preview
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground w-48">
              Click to view the live demo in a new tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    const bannerHeight = 350; // Fixed height for a more consistent look

    setBannerStyle({ 
      top: `${top + height / 2 - bannerHeight / 2}px`, 
      height: `${bannerHeight}px`
    });
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            8 Layouts
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Blog Home Page
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Choose the perfect layout for your next blog or website project.
          </p>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {blogLayouts.map((layout) => (
              <div
                key={layout.name}
                className="flex flex-col items-center gap-4"
                onClick={(e) =>
                  handleLayoutClick(layout, e.currentTarget as HTMLDivElement)
                }
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {layout.name}
                </h3>
                <div
                  className="w-full"
                >
                  <LayoutCard
                    imageUrl={layout.imageUrl}
                    imageHint={layout.imageHint}
                    comingSoon={layout.comingSoon}
                  />
                </div>
              </div>
            ))}
          </div>
          {activeLayout &&
            blogLayouts.some((l) => l.name === activeLayout.name) && (
              <PreviewBanner
                layout={activeLayout}
                style={bannerStyle}
                onClose={clearActiveLayout}
              />
            )}
        </section>

        <Separator className="my-8" />

        <section className="text-center py-16 md:py-24 lg:py-32 px-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            6 Layouts
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Post Page
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Select a post style that best fits your content.
          </p>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {postLayouts.map((layout) => (
              <div
                key={layout.name}
                className="flex flex-col items-center gap-4"
                onClick={(e) =>
                  handleLayoutClick(layout, e.currentTarget as HTMLDivElement)
                }
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {layout.name}
                </h3>
                <div className="w-full">
                  <LayoutCard
                    imageUrl={layout.imageUrl}
                    imageHint={layout.imageHint}
                    comingSoon={layout.comingSoon}
                  />
                </div>
              </div>
            ))}
          </div>
          {activeLayout &&
            postLayouts.some((l) => l.name === activeLayout.name) && (
              <PreviewBanner
                layout={activeLayout}
                style={bannerStyle}
                onClose={clearActiveLayout}
              />
            )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
