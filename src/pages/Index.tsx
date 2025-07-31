import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WeddingDetails from '@/components/WeddingDetails';
import WeddingParty from '@/components/WeddingParty';
import GoogleSheetsRegistration from '@/components/GoogleSheetsRegistration';
import ContactRSVP from '@/components/ContactRSVP';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="transition-all duration-700 ease-in-out">
        <Hero />
      </div>
      <div className="transition-all duration-700 ease-in-out">
        <WeddingDetails />
      </div>
      <div className="transition-all duration-700 ease-in-out">
        <WeddingParty />
      </div>
      <div className="transition-all duration-700 ease-in-out">
        <GoogleSheetsRegistration />
      </div>
      <div className="transition-all duration-700 ease-in-out">
        <ContactRSVP />
      </div>
      <div className="transition-all duration-700 ease-in-out">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
