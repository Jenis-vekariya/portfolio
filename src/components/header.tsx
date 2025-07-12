import Link from 'next/link';
import { Menu, LayoutTemplate } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:hidden">
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <LayoutTemplate className="h-6 w-6 text-primary" />
              FlexiBlog
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col md:items-center">
          <div className="py-4">
             <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <LayoutTemplate className="h-7 w-7 text-primary" />
              FlexiBlog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
