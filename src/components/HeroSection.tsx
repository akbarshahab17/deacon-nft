import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="hero-glow top-1/4 -left-32 opacity-60" />
      <div className="hero-glow top-1/3 -right-32 opacity-40" style={{ background: 'radial-gradient(circle, hsl(270 60% 55% / 0.2) 0%, transparent 70%)' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">The Future of Digital Ownership</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Discover, Collect & Sell{' '}
              <span className="gradient-text">Extraordinary</span>{' '}
              NFTs
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Deacon NFT is the premier marketplace for unique digital assets. 
              Explore exclusive collections from world-class artists and creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Explore Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Create NFT
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/30"
            >
              {[
                { value: '240K+', label: 'Artworks' },
                { value: '100K+', label: 'Artists' },
                { value: '$1.2B', label: 'Total Sales' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Featured NFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse" />
              
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-card rounded-3xl p-4 gradient-border"
              >
                <div className="relative aspect-square w-72 sm:w-80 lg:w-96 rounded-2xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=600&fit=crop"
                    alt="Featured NFT"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-card text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span>Trending</span>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <p className="text-sm font-medium">Cosmic Dreamer</p>
                      <p className="text-xs text-muted-foreground">@artist_name</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground">Current Bid</p>
                      <p className="font-display font-bold text-lg">2.45 ETH</p>
                    </div>
                    <Button variant="neon" size="sm">Place Bid</Button>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-20 h-20 rounded-2xl glass-card p-3 hidden lg:flex items-center justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop"
                  alt="NFT Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl glass-card p-3 hidden lg:flex items-center justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&h=100&fit=crop"
                  alt="NFT Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
