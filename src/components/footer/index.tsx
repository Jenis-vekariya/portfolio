import { Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:justify-start">
             <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Renderly
            </p>
          </div>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex justify-center md:justify-end space-x-5">
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
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
           &copy; {new Date().getFullYear()} Renderly. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
