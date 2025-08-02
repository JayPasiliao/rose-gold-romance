import { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoHeading from '@/assets/logo-heading.png';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
          <section className="min-h-screen relative overflow-hidden bg-transparent flex items-center justify-center">
        {/* Falling Flower Petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
          <div className="falling-petal"></div>
        </div>
        
        {/* Animated Rose Gold Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 animate-rose-gold-bg"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gold/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary/8 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gold/12 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/6 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Heading */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-96 h-96 mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
              <img 
                src={logoHeading} 
                alt="Wedding Logo Heading" 
                className="w-88 h-88 object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shine"></div>
            </div>
          </div>

                     {/* Names */}
           <div className="mb-12">
             <h1 className="mb-4">
               <div className="text-gold inline-block" style={{ animationDelay: '0s' }}>
                 <AnimatedText 
                   text="Christine" 
                   className="inline-block" 
                   animationDelay={0.2} 
                   animationDuration={0.08}
                 />
               </div>
               <div className="text-gold inline-block ml-4" style={{ animationDelay: '2s' }}>
                 <AnimatedText 
                   text=" Joyce" 
                   className="inline-block" 
                   animationDelay={0.4} 
                   animationDuration={0.08}
                 />
               </div>
             </h1>
             <div className="flex items-center justify-center mb-4">
               <div className="h-px bg-black/30 flex-1 max-w-20"></div>
               <Heart className="mx-6 text-black animate-glitter" size={32} />
               <div className="h-px bg-black/30 flex-1 max-w-20"></div>
             </div>
             <h1>
               <div className="text-gold inline-block" style={{ animationDelay: '4s' }}>
                 <AnimatedText 
                   text="Jay" 
                   className="inline-block" 
                   animationDelay={0.6} 
                   animationDuration={0.1}
                 />
               </div>
             </h1>
             <p className="text-xl text-black/80 mt-6 font-playfair animate-fade-in" style={{ animationDelay: '0.8s' }}>
               are getting married
             </p>
           </div>

                     {/* Wedding Date & Location */}
           <div className="glass-card max-w-2xl mx-auto mb-12">
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-black">
               <div className="flex items-center gap-3">
                 <Calendar className="text-gold" size={24} />
                 <div>
                   <p className="text-lg font-medium">January 22, 2026</p>
                   <p className="text-sm text-black/70">Wednesday</p>
                 </div>
               </div>
               <div className="w-px h-12 bg-black/20 hidden md:block"></div>
               <div className="flex items-center gap-3">
                 <MapPin className="text-gold" size={24} />
                 <div>
                   <p className="text-lg font-medium">Baguio City</p>
                   <p className="text-sm text-black/70">Our Lady of Atonement Cathedral</p>
                 </div>
               </div>
             </div>
           </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('details')}
              className="btn-rose-gold text-lg px-8 py-3"
            >
              View Details
            </Button>
            <Button 
              onClick={() => scrollToSection('rsvp')}
              className="btn-glass text-lg px-8 py-3"
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;