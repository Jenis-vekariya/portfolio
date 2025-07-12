import Link from 'next/link';
import { Menu, LayoutTemplate } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Header() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Layouts' },
    { href: '#', label: 'Docs' },
    { href: '#', label: 'Support' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-8">
                    <LayoutTemplate className="h-6 w-6 text-primary" />
                    FlexiBlog
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex-1 flex justify-start"></div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <LayoutTemplate className="h-6 w-6 text-primary" />
              FlexiBlog
            </Link>
            <div className="flex-1 flex justify-end">
                <nav className="flex space-x-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
            </div>
          </div>
          
           <div className="md:hidden">
             {/* This div is to balance the flexbox on mobile, keeping the logo centered if there's no right-side element */}
             <div className="w-8"></div>
           </div>

           <div className="flex-1 flex justify-center md:hidden">
             <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
                <LayoutTemplate className="h-6 w-6 text-primary" />
                FlexiBlog
              </Link>
           </div>
           
           <div className="flex-1 flex justify-end md:hidden">
           </div>
        </div>
      </div>
    </header>
  );
}
