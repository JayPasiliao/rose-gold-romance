import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WeddingDetails = () => {
  const ceremonyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.2697687088834!2d120.59469636960147!3d16.395825598395374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16a6f35b7ff%3A0xd8e456f5c1d7f21a!2sOur%20Lady%20of%20Atonement%20Cathedral!5e0!3m2!1sen!2sph!4v1642567890123!5m2!1sen!2sph";

  const addToCalendar = () => {
    const startDate = new Date('2026-01-22T14:00:00').toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date('2026-01-22T20:00:00').toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const details = `Wedding celebration of Christine Joyce C. Bentinganan and Juanito S. Pasiliao Jr.
    
Ceremony: 2:00 PM - 3:30 PM at Our Lady of Atonement Cathedral, Baguio City
Reception: 4:00 PM onwards (Venue TBA)`;
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Christine%20Joyce%20%26%20Juanito%20Jr.%20Wedding&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=Our%20Lady%20of%20Atonement%20Cathedral,%20Baguio%20City`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
            Wedding Details
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-primary w-16"></div>
            <Heart className="text-primary" size={24} />
            <div className="h-px bg-primary w-16"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us as we celebrate the beginning of our forever
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ceremony Details */}
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-playfair text-foreground mb-2">Ceremony</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">January 22, 2026</p>
                    <p className="text-sm text-muted-foreground">Wednesday</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">2:00 PM - 3:30 PM</p>
                    <p className="text-sm text-muted-foreground">Please arrive 15 minutes early</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Our Lady of Atonement Cathedral</p>
                    <p className="text-sm text-muted-foreground">Baguio City</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg overflow-hidden">
                <iframe
                  src={ceremonyMapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Reception Details */}
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-playfair text-foreground mb-2">Reception</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-gold" size={20} />
                  <div>
                    <p className="font-medium">January 22, 2026</p>
                    <p className="text-sm text-muted-foreground">Same day</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-gold" size={20} />
                  <div>
                    <p className="font-medium">4:00 PM onwards</p>
                    <p className="text-sm text-muted-foreground">Dinner & Dancing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <p className="font-medium">Venue To Be Announced</p>
                    <p className="text-sm text-muted-foreground">Details will be shared soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-primary/10 rounded-lg border border-gold/20">
                <h4 className="font-medium text-foreground mb-2">Dress Code</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Formal attire requested. Ladies, please avoid wearing white.
                </p>
                <p className="text-xs text-muted-foreground">
                  More details about the reception venue will be shared via invitation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add to Calendar */}
        <div className="text-center mt-12">
          <button
            onClick={addToCalendar}
            className="btn-rose-gold inline-flex items-center gap-2"
          >
            <Calendar size={20} />
            Add to Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;