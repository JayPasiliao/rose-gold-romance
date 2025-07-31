import { Mail, Phone, Facebook, Heart, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactRSVP = () => {
  const contacts = [
    {
      name: 'Juanito Jr. (Jay)',
      role: 'Groom',
      facebook: 'https://www.facebook.com/jaypasiliao',
      email: 'jaypasiliao@gmail.com',
      phone: '09171539062',
      gradient: 'bg-gradient-rose-gold'
    },
    {
      name: 'Christine Joyce',
      role: 'Bride', 
      facebook: 'https://www.facebook.com/ching.cjbentinganan',
      email: 'cj_bentingana.rph@yahoo.com',
      phone: '09171229492',
      gradient: 'bg-gradient-gold'
    }
  ];

  const handleRSVP = (contact: typeof contacts[0]) => {
    const message = `Hello! I would like to RSVP for Christine Joyce & Juanito Jr.'s wedding on January 22, 2026.`;
    const whatsappUrl = `https://wa.me/63${contact.phone.slice(1)}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailRSVP = (contact: typeof contacts[0]) => {
    const subject = 'RSVP - Christine Joyce & Juanito Jr. Wedding';
    const body = `Hello!

I would like to RSVP for your wedding on January 22, 2026.

Name: 
Number of Guests: 
Dietary Restrictions (if any): 
Additional Notes: 

Looking forward to celebrating with you!

Best regards,`;

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <section id="rsvp" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
            Contact & RSVP
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-primary w-16"></div>
            <Heart className="text-primary" size={24} />
            <div className="h-px bg-primary w-16"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please confirm your attendance by contacting us directly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 ${contact.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-playfair text-foreground mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {contact.role}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                    <Phone className="text-primary" size={20} />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{contact.phone}</p>
                      <p className="text-xs text-muted-foreground">Call or Text</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                    <Mail className="text-primary" size={20} />
                    <div className="flex-1">
                      <p className="font-medium text-foreground break-all">{contact.email}</p>
                      <p className="text-xs text-muted-foreground">Email</p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                    <Facebook className="text-primary" size={20} />
                    <div className="flex-1">
                      <a 
                        href={contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        @{contact.facebook.split('/').pop()}
                      </a>
                      <p className="text-xs text-muted-foreground">Facebook</p>
                    </div>
                  </div>
                </div>

                {/* RSVP Buttons */}
                <div className="mt-8 space-y-3">
                  <Button
                    onClick={() => handleRSVP(contact)}
                    className={`w-full ${contact.gradient} text-white hover:shadow-gold transform hover:scale-105 transition-all duration-300`}
                  >
                    <MessageCircle className="mr-2" size={18} />
                    RSVP via WhatsApp
                  </Button>
                  
                  <Button
                    onClick={() => handleEmailRSVP(contact)}
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10"
                  >
                    <Mail className="mr-2" size={18} />
                    RSVP via Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional RSVP Information */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-playfair text-foreground mb-4">
                RSVP Guidelines
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Deadline:</strong> Please confirm your attendance by <strong>December 15, 2025</strong>
                </p>
                <p>
                  <strong>Guest Information:</strong> Please include the number of guests and any dietary restrictions
                </p>
                <p>
                  <strong>Children:</strong> We love your little ones, but this is an adults-only celebration
                </p>
                <p className="text-sm pt-4 border-t border-border">
                  Your presence is the greatest gift we could ask for. We can't wait to celebrate with you!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactRSVP;