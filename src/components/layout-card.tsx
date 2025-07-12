import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

type LayoutCardProps = {
  name: string;
  imageUrl: string;
  imageHint: string;
};

export function LayoutCard({ name, imageUrl, imageHint }: LayoutCardProps) {
  return (
    <Link href="#" className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt={`Preview of ${name} layout`}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm" tabIndex={-1}>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
          </div>
        </div>
        <CardContent className="p-4 bg-card">
          <h3 className="text-center font-medium text-card-foreground text-lg">{name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
