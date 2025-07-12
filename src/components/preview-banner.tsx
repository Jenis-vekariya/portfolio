
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';

export type PreviewBannerProps = {
  name: string;
  previews: { name: string; url: string }[];
  liveUrl: string;
  style?: React.CSSProperties;
  onMouseLeave?: () => void;
};

export function PreviewBanner({ name, previews, liveUrl, style, onMouseLeave }: PreviewBannerProps) {
  return (
    <div
      className="absolute left-0 right-0 z-10 mx-auto w-[calc(100%+2rem)] -translate-x-4 p-4 overflow-hidden"
      style={style}
      onMouseLeave={onMouseLeave}
    >
        <div className="bg-background border rounded-lg shadow-2xl h-full w-full flex flex-col justify-center transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 p-6">
            <div className="flex items-center justify-between gap-8 h-full">
                {previews.map((preview) => (
                    <div key={preview.name} className="flex flex-col items-center justify-center gap-4 text-center">
                        <div className="relative w-[300px] h-[225px] rounded-md overflow-hidden border bg-muted/30 flex items-center justify-center">
                            <Image
                                src={preview.url}
                                alt={`Preview of ${preview.name}`}
                                width={300}
                                height={225}
                                className="object-cover w-full h-full"
                                sizes="300px"
                            />
                        </div>
                        <h4 className="text-sm font-medium text-foreground">{preview.name}</h4>
                    </div>
                ))}
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <Button asChild className="w-full" size="lg">
                        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                             <Eye className="mr-2 h-4 w-4" />
                            Live Preview
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                     <p className="text-sm text-muted-foreground w-48">Click to view the live demo in a new tab.</p>
                </div>
            </div>
        </div>
    </div>
  );
}
