import Link from 'next/link';
import { Layers } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Layers className="h-6 w-6 text-primary" />
              <span>Renderly</span>
            </Link>
        </div>
      </div>
    </header>
  );
}
