import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-sm text-muted-foreground order-first md:order-none">
            &copy; 2025 FlexiBlog
          </p>
          <div className="flex space-x-5">
            <Link href="#" aria-label="Twitter" className="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram" className="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
