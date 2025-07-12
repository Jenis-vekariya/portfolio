import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

type LayoutCardProps = {
  imageUrl: string;
  imageHint: string;
  comingSoon?: boolean;
};

export function LayoutCard({ imageUrl, imageHint, comingSoon = false }: LayoutCardProps) {
  const cardContent = (
      <Card className="overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col w-full">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt={`Preview of a layout`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
           {comingSoon && (
             <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Coming Soon</span>
             </div>
           )}
        </div>
      </Card>
  );

  if (comingSoon) {
    return (
       <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='w-full cursor-not-allowed'>
              {cardContent}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>This layout is coming soon!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg w-full">
      {cardContent}
    </div>
  );
}
