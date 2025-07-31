import { Heart, Calendar } from 'lucide-react';
import weddingLogo from '@/assets/cj-wedding-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo and Names */}
          <div className="mb-8">
            <img 
              src={weddingLogo} 
              alt="C&J Wedding Logo" 
              className="w-16 h-16 mx-auto mb-4 opacity-90"
            />
            <h3 className="text-2xl text-cursive mb-2">
              Christine Joyce & Juanito Jr.
            </h3>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Calendar size={16} />
              <span>January 22, 2026</span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-white/30 w-20"></div>
            <Heart className="text-white/60" size={20} />
            <div className="h-px bg-white/30 w-20"></div>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <p className="text-lg font-playfair italic text-white/90 max-w-2xl mx-auto">
              "Love is not about how many days, months, or years you have been together. 
              Love is about how much you love each other every single day."
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>© 2026 Christine Joyce & Juanito Jr. Wedding</p>
            <p className="mt-1">Created with ❤️ for our special day</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;