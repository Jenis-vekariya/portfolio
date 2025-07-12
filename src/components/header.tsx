import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              FlexiBlog
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Layouts</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          {/* Mobile menu button could be added here */}
        </div>
      </div>
    </header>
  );
}
