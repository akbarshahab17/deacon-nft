import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingSection from '@/components/TrendingSection';
import CollectionsSection from '@/components/CollectionsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Deacon NFT - Premier NFT Marketplace for Digital Collectibles</title>
        <meta 
          name="description" 
          content="Discover, collect, and sell extraordinary NFTs on Deacon NFT. The premier marketplace for unique digital art and collectibles from world-class creators." 
        />
        <meta name="keywords" content="NFT, marketplace, digital art, collectibles, crypto, blockchain, ethereum" />
        <link rel="canonical" href="https://deaconnft.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <TrendingSection />
          <CollectionsSection />
          <HowItWorksSection />
          <StatsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
