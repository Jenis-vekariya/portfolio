
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Images } from 'lucide-react';
import { useState } from 'react';

export type PreviewBannerProps = {
  name: string;
  previews: { name: string; url: string }[];
  liveUrl: string;
  style?: React.CSSProperties;
  onMouseLeave?: () => void;
};

export function PreviewBanner({ name, previews, liveUrl, style, onMouseLeave }: PreviewBannerProps) {
  const [activePreview, setActivePreview] = useState(previews[0].url);

  return (
    <div
      className="absolute left-0 right-0 z-10 mx-auto w-[calc(100%+2rem)] -translate-x-4 p-4 overflow-hidden"
      style={style}
      onMouseLeave={onMouseLeave}
    >
        <div className="bg-background border rounded-lg shadow-2xl h-full w-full flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
            <div className="flex-grow p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                <div className="md:col-span-2 relative rounded-md overflow-hidden border bg-muted/30">
                     <Image
                        src={activePreview}
                        alt={`Preview of ${name}`}
                        fill
                        className="object-contain object-center p-2"
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground mb-1">
                            {name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Select a view below to preview.
                        </p>
                        <div className="flex flex-col space-y-2">
                             {previews.map((preview) => (
                                <Button
                                    key={preview.name}
                                    variant={activePreview === preview.url ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className="justify-start"
                                    onClick={() => setActivePreview(preview.url)}
                                >
                                    <Images className="mr-2 h-4 w-4" />
                                    {preview.name}
                                </Button>
                             ))}
                        </div>
                    </div>
                    <Button asChild className="w-full mt-4">
                        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                             <Eye className="mr-2 h-4 w-4" />
                            Live Preview
                            <ExternalLink className="ml-auto h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
