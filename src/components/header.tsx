import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Header() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Layouts' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center h-16">
          <div className="absolute left-0">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col space-y-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <nav className="hidden md:flex md:space-x-8">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Layouts</Link>
            </nav>
          </div>

          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              FlexiBlog
            </Link>
          </div>

          <div className="absolute right-0 hidden md:flex md:space-x-8">
            <nav className="flex space-x-8">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}