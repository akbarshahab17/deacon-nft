import { motion } from 'framer-motion';
import { TrendingUp, Users, Image, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: Image,
    value: '240K+',
    label: 'Digital Artworks',
    change: '+12.5%',
    positive: true,
  },
  {
    icon: Users,
    value: '100K+',
    label: 'Active Users',
    change: '+8.2%',
    positive: true,
  },
  {
    icon: DollarSign,
    value: '$1.2B',
    label: 'Total Volume',
    change: '+24.1%',
    positive: true,
  },
  {
    icon: TrendingUp,
    value: '45K+',
    label: 'Daily Trades',
    change: '+5.7%',
    positive: true,
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 relative">
      {/* Background Glow */}
      <div className="hero-glow bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-12 gradient-border">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-medium ${stat.positive ? 'text-primary' : 'text-destructive'}`}>
                    {stat.change}
                  </span>
                </div>
                
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
