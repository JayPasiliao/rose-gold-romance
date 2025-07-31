import { useState } from 'react';
import { Heart, Crown, Flower, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WeddingParty = () => {
  const [activeTab, setActiveTab] = useState('sponsors');

  const principalSponsors = [
    ['Kerklyne Velarde', 'Miguelito Velarde Jr.'],
    ['Marichu Pimentel', 'Elias Aoanan'],
    ['Luisa Lawagan', 'Rolly Bautista'],
    ['Silyaka Bentinganan', 'Gurmond Sepulchre'],
    ['Jackie Bentinganan', 'Noel Bentinganan'],
    ['Soledad Abanilla', 'Leo Bentinganan'],
    ['Zenia Monteclaro', 'Manuel Bentinganan Jr.'],
    ['Cristina Manalo', 'Job Bentinganan'],
    ['Grace Cadwising', 'Jason Laranang'],
    ['Roselyn Serrano', 'Roger Imasa'],
    ['Rose Marcelino', 'Jamie Bulayo'],
    ['Rebecca Naguit', 'Alfonso Naguit'],
    ['Leah Lyn Paulengo', 'Edgar Enriquez'],
    ['Mary Jean Chua', 'Cleofas Oliver'],
    ['Ma. Cristina Chua', 'Roger Ternida'],
    ['Ma. Mylen Yaranon', 'Charles Carame'],
    ['Mary Angeline Vinluan', 'Alex Naguit'],
    ['Flordeliza Beltran', 'Ronnie Beltran'],
    ['Rlynne Banez', 'Mark Errol Bentinganan']
  ];

  const secondarySponsors = [
    { role: 'Cord', names: ['Rosiel Chua', 'Marvin Pasiliao'] },
    { role: 'Veil', names: ['Merily Pimienta', 'Juan Carlo Bentinganan'] },
    { role: 'Candle', names: ['Mary Jane Sortejas', 'Levi Beltran'] }
  ];

  const bridesmaids = [
    { name: 'Jardine Kaye Sanchez', role: 'Maid of Honor' },
    { name: 'Paulyn Maye Rimando', role: '' },
    { name: 'Mary Kathleen Joy Samson', role: '' },
    { name: 'Alena Bentinganan', role: '' },
    { name: 'Maricar Aguinalde', role: '' },
    { name: 'Riyhana Mariel Velarde', role: '' },
    { name: 'Kynai Carylle Docyogen', role: '' },
    { name: 'Kristhel Brioso', role: '' },
    { name: 'Nicole Manuel', role: '' },
    { name: 'Angelica Marcelino', role: '' },
    { name: 'Angelica Naguita', role: '' },
    { name: 'Anne Marie Estepa', role: '' }
  ];

  const groomsmen = [
    { name: 'Marc Christhoper Marcelino', role: 'Best Man' },
    { name: 'Emmanuel Posedio', role: '' },
    { name: 'Arcee Cerezo', role: '' },
    { name: 'Kristoff John Santiago', role: '' },
    { name: 'Daryl Tabios', role: '' },
    { name: 'Miguel Marco Velarde', role: '' },
    { name: 'Arron Gabrielle Velarde', role: '' },
    { name: 'Manuelito Sortejas', role: '' },
    { name: 'Jek Gilbert Brioso', role: '' },
    { name: 'Richard Beltran', role: '' },
    { name: 'Jonathan Manipon', role: '' },
    { name: 'John Christian Estelita', role: '' }
  ];

  return (
    <section id="wedding-party" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
            Our Wedding Party
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-primary w-16"></div>
            <Heart className="text-primary" size={24} />
            <div className="h-px bg-primary w-16"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The special people who will stand with us on our wedding day
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 glass mb-12 p-2 h-auto">
            <TabsTrigger 
              value="sponsors" 
              className="data-[state=active]:bg-gradient-rose-gold data-[state=active]:text-white py-3"
            >
              <Users className="mr-2" size={20} />
              Principal Sponsors
            </TabsTrigger>
            <TabsTrigger 
              value="secondary" 
              className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white py-3"
            >
              <Crown className="mr-2" size={20} />
              Secondary Sponsors
            </TabsTrigger>
            <TabsTrigger 
              value="bridesmaids" 
              className="data-[state=active]:bg-gradient-rose-gold data-[state=active]:text-white py-3"
            >
              <Flower className="mr-2" size={20} />
              Bridesmaids
            </TabsTrigger>
            <TabsTrigger 
              value="groomsmen" 
              className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white py-3"
            >
              <Heart className="mr-2" size={20} />
              Groomsmen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sponsors" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principalSponsors.map((pair, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-rose-gold rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="font-medium text-foreground mb-1">{pair[0]}</p>
                    <p className="font-medium text-foreground">{pair[1]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="secondary" className="animate-fade-in-up">
            <div className="grid md:grid-cols-3 gap-8">
              {secondarySponsors.map((sponsor, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <Crown className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-playfair text-foreground">{sponsor.role}</h3>
                    </div>
                    <div className="space-y-2">
                      {sponsor.names.map((name, nameIndex) => (
                        <p key={nameIndex} className="font-medium text-foreground">{name}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bridesmaids" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {bridesmaids.map((person, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className={`w-12 h-12 ${person.role ? 'bg-gradient-gold' : 'bg-gradient-rose-gold'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        {person.role ? <Crown className="text-white" size={20} /> : <Flower className="text-white" size={20} />}
                      </div>
                    </div>
                    <p className="font-medium text-foreground mb-1">{person.name}</p>
                    {person.role && (
                      <p className="text-sm text-gold font-medium">{person.role}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groomsmen" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {groomsmen.map((person, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className={`w-12 h-12 ${person.role ? 'bg-gradient-gold' : 'bg-gradient-rose-gold'} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        {person.role ? <Crown className="text-white" size={20} /> : <Heart className="text-white" size={20} />}
                      </div>
                    </div>
                    <p className="font-medium text-foreground mb-1">{person.name}</p>
                    {person.role && (
                      <p className="text-sm text-gold font-medium">{person.role}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WeddingParty;