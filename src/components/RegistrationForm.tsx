import { useState } from 'react';
import { User, Mail, Phone, Facebook, Building, Heart, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    facebook: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Registration data:', formData);
    // You can add email sending logic or API call here
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
            Register Your Attendance
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            <Heart className="text-primary animate-pulse" size={24} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please provide your details to confirm your attendance at our special day
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-0 shadow-2xl backdrop-blur-xl bg-white/10">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-playfair text-foreground">
                Guest Registration
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                We're excited to celebrate with you!
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="+63 912 345 6789"
                    />
                  </div>
                </div>

                {/* Social Media & Company Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="text-foreground font-medium flex items-center gap-2">
                      <Facebook className="w-4 h-4 text-primary" />
                      Facebook Account
                    </Label>
                    <Input
                      id="facebook"
                      name="facebook"
                      type="url"
                      value={formData.facebook}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="https://facebook.com/yourprofile"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary" />
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Message Section */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Special Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="glass-input border-white/20 bg-white/10 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Share a special message or note for the couple..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full btn-rose-gold text-lg py-3 px-8 font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Register Attendance
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm; 