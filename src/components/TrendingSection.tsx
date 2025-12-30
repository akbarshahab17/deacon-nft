import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import NFTCard from './NFTCard';
import { Button } from '@/components/ui/button';

const trendingNFTs = [
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop',
    title: 'Abstract Dimensions',
    creator: 'crypto_artist',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    price: '1.25 ETH',
    likes: 234,
    timeLeft: '2h 15m',
  },
  {
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop',
    title: 'Neon Dreamscape',
    creator: 'digital_soul',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    price: '0.85 ETH',
    likes: 189,
    timeLeft: '5h 30m',
  },
  {
    image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=500&h=500&fit=crop',
    title: 'Cosmic Portal',
    creator: 'space_creator',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    price: '3.45 ETH',
    likes: 567,
  },
  {
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500&h=500&fit=crop',
    title: 'Digital Genesis',
    creator: 'art_master',
    creatorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop',
    price: '2.10 ETH',
    likes: 423,
    timeLeft: '1d 4h',
  },
  {
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=500&h=500&fit=crop',
    title: 'Ethereal Waves',
    creator: 'wave_rider',
    creatorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    price: '1.75 ETH',
    likes: 312,
  },
  {
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=500&fit=crop',
    title: 'Quantum Dreams',
    creator: 'quantum_art',
    creatorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    price: '4.20 ETH',
    likes: 891,
    timeLeft: '12h',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    title: 'Cyber Punk City',
    creator: 'neon_nights',
    creatorAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    price: '2.80 ETH',
    likes: 654,
  },
  {
    image: 'https://images.unsplash.com/photo-1604076913837-52ab5f8b3a3b?w=500&h=500&fit=crop',
    title: 'Aurora Borealis',
    creator: 'light_painter',
    creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    price: '1.95 ETH',
    likes: 445,
    timeLeft: '8h 45m',
  },
];

const TrendingSection = () => {
  return (
    <section id="explore" className="py-24 relative">
      {/* Background Glow */}
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Trending Now</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Discover <span className="gradient-text">Trending</span> NFTs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Explore the most sought-after digital collectibles from top creators worldwide
            </p>
          </div>

          <Button variant="hero-outline" className="group self-start md:self-auto">
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingNFTs.map((nft, index) => (
            <NFTCard key={nft.title} {...nft} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
