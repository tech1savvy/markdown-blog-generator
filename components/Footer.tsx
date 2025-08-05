import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Binary Biome. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
