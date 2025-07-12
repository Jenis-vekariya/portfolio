import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

type LayoutCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export function LayoutCard({ name, imageUrl, imageHint, description }: LayoutCardProps) {
  return (
    <Link href="#" className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
      <Card className="overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt={`Preview of ${name} layout`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
        <CardFooter>
            <Button variant="secondary" size="sm" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              Live Preview
            </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
