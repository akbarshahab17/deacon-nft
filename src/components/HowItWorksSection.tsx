import { motion } from 'framer-motion';
import { Wallet, ImagePlus, Tag, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect your crypto wallet to start buying, selling, and creating NFTs on Deacon.',
    color: 'from-primary to-primary/50',
  },
  {
    icon: ImagePlus,
    title: 'Create or Collect',
    description: 'Upload your digital artwork or browse thousands of unique NFTs from top creators.',
    color: 'from-accent to-accent/50',
  },
  {
    icon: Tag,
    title: 'List for Sale',
    description: 'Set your price or auction your NFT. Our marketplace handles the rest seamlessly.',
    color: 'from-primary to-accent',
  },
  {
    icon: Rocket,
    title: 'Earn & Grow',
    description: 'Receive payments instantly and earn royalties on secondary sales forever.',
    color: 'from-accent to-primary',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="create" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes. Our platform makes it easy to create, buy, and sell NFTs.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/30 group-hover:shadow-[0_0_40px_hsl(175_80%_50%/0.1)]">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center font-display font-bold text-sm text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-5`}
                >
                  <step.icon className="w-full h-full text-primary-foreground" />
                </motion.div>

                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
