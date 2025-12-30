import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Start Creating Today</span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Join the{' '}
            <span className="gradient-text">NFT Revolution?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of artists and collectors on Deacon NFT. Create, buy, and sell 
            unique digital assets in the world's most vibrant NFT marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border/30"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent ring-2 ring-background"
                  />
                ))}
              </div>
              <span className="text-sm">100K+ Active Users</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">$1.2B+</span> Total Volume
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">240K+</span> NFTs Created
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
