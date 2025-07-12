import Image from 'next/image';
import Link from 'next/link';
import { Card, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

type LayoutCardProps = {
  imageUrl: string;
  imageHint: string;
};

export function LayoutCard({ imageUrl, imageHint }: LayoutCardProps) {
  return (
    <Link href="#" className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg w-full">
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
        <CardFooter className="p-2">
            <Button variant="secondary" size="sm" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              Live Preview
            </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
