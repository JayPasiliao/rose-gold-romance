import { useState } from 'react';
import { Heart, Crown, Flower, Users, Baby, Book, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WeddingParty = () => {
  const [activeTab, setActiveTab] = useState('parents');

  const parents = {
    groom: {
      father: 'Juanito C. Pasiliao Jr',
      mother: 'Laura S. Pasiliao'
    },
    bride: {
      father: 'Eli Bentinganan',
      mother: 'Josephine Chua'
    }
  };

  const bearers = {
    bible: 'Asher Samuel Beltran',
    ring: 'Arvis Ezio Bentinganan',
    coin: 'Franz Ely Pimienta',
    flowerGirls: [
      'Cheska Jean Lawagan',
      'Franscheska Maine Pimienta',
      'MB Naguit'
    ],
    offertory: [
      'Chelsea Joy Lawagan',
      'Rosalpha Marcelino',
      'Ma. Rosella Marcelino',
      'Jesalie Ringor Pasiliao',
      'MC Khallie Comia',
      'Jay R Marcelino',
      'Emmanuel Bentinganan',
      'Francis Pimienta'
    ]
  };

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
    { name: 'Angelica Naguit', role: '' },
    { name: 'Anne Marie Estepa', role: '' }
  ];

  const groomsmen = [
    { name: 'Marc Christhoper Marcelino', role: 'Best Man' },
    { name: 'Emmanuel Posedio', role: '' },
    { name: 'Arcee Cerezo', role: '' },
    { name: 'Kristoff John Santiago', role: '' },
    { name: 'Daryl Tabios', role: '' },
    { name: 'Miguel Marco Velarde', role: '' },
    { name: 'Aaron Gabrielle Velarde', role: '' },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="parents" 
                className="w-full data-[state=active]:bg-gradient-rose-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Heart className="mr-2" size={20} />
                Parents
              </TabsTrigger>
            </TabsList>
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="bearers" 
                className="w-full data-[state=active]:bg-gradient-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Baby className="mr-2" size={20} />
                Bearers
              </TabsTrigger>
            </TabsList>
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="sponsors" 
                className="w-full data-[state=active]:bg-gradient-rose-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Users className="mr-2" size={20} />
                Principal
              </TabsTrigger>
            </TabsList>
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="secondary" 
                className="w-full data-[state=active]:bg-gradient-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Crown className="mr-2" size={20} />
                Secondary
              </TabsTrigger>
            </TabsList>
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="bridesmaids" 
                className="w-full data-[state=active]:bg-gradient-rose-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Flower className="mr-2" size={20} />
                Bridesmaids
              </TabsTrigger>
            </TabsList>
            <TabsList className="glass-tabs p-2 h-auto backdrop-blur-xl bg-white/15 border border-white/20 shadow-xl">
              <TabsTrigger 
                value="groomsmen" 
                className="w-full data-[state=active]:bg-gradient-gold data-[state=active]:text-white data-[state=active]:shadow-lg py-3 transition-all duration-300 hover:bg-white/20 text-foreground font-medium"
              >
                <Heart className="mr-2" size={20} />
                Groomsmen
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="parents" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Groom's Parents */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-playfair text-foreground mb-2">Groom's Parents</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Father</p>
                      <p className="font-medium text-foreground text-lg">{parents.groom.father}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mother</p>
                      <p className="font-medium text-foreground text-lg">{parents.groom.mother}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bride's Parents */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-playfair text-foreground mb-2">Bride's Parents</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Father</p>
                      <p className="font-medium text-foreground text-lg">{parents.bride.father}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mother</p>
                      <p className="font-medium text-foreground text-lg">{parents.bride.mother}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bearers" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bible Bearer */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Book className="text-white" size={20} />
                    </div>
                    <h4 className="font-playfair text-foreground text-lg">Bible Bearer</h4>
                  </div>
                  <p className="font-medium text-foreground">{bearers.bible}</p>
                </CardContent>
              </Card>

              {/* Ring Bearer */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-rose-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="text-white" size={20} />
                    </div>
                    <h4 className="font-playfair text-foreground text-lg">Ring Bearer</h4>
                  </div>
                  <p className="font-medium text-foreground">{bearers.ring}</p>
                </CardContent>
              </Card>

              {/* Coin Bearer */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Gift className="text-white" size={20} />
                    </div>
                    <h4 className="font-playfair text-foreground text-lg">Coin Bearer</h4>
                  </div>
                  <p className="font-medium text-foreground">{bearers.coin}</p>
                </CardContent>
              </Card>

              {/* Flower Girls */}
              <Card className="glass-card hover-lift md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-rose-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Flower className="text-white" size={20} />
                    </div>
                    <h4 className="font-playfair text-foreground text-lg">Flower Girls</h4>
                  </div>
                  <div className="space-y-2">
                    {bearers.flowerGirls.map((name, index) => (
                      <p key={index} className="font-medium text-foreground">{name}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Offertory */}
              <Card className="glass-card hover-lift md:col-span-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Gift className="text-white" size={20} />
                    </div>
                    <h4 className="font-playfair text-foreground text-lg">Offertory</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {bearers.offertory.map((name, index) => (
                      <p key={index} className="font-medium text-foreground">{name}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

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