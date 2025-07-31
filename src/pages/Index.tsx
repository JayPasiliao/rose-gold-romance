import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WeddingDetails from '@/components/WeddingDetails';
import WeddingParty from '@/components/WeddingParty';
import ContactRSVP from '@/components/ContactRSVP';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WeddingDetails />
      <WeddingParty />
      <ContactRSVP />
      <Footer />
    </div>
  );
};

export default Index;
