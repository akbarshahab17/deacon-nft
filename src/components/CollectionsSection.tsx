import { motion } from 'framer-motion';
import { Users, Verified, ArrowUpRight } from 'lucide-react';

const collections = [
  {
    name: 'Cyber Punks',
    images: [
      'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=200&h=200&fit=crop',
    ],
    creator: 'CyberLabs',
    verified: true,
    items: 10000,
    floorPrice: '2.5 ETH',
  },
  {
    name: 'Abstract Worlds',
    images: [
      'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=200&h=200&fit=crop',
    ],
    creator: 'AbstractDAO',
    verified: true,
    items: 5000,
    floorPrice: '1.8 ETH',
  },
  {
    name: 'Digital Dreams',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1604076913837-52ab5f8b3a3b?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=200&h=200&fit=crop',
    ],
    creator: 'DreamStudio',
    verified: false,
    items: 3500,
    floorPrice: '0.95 ETH',
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated selections from the most innovative digital artists and creators
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-3xl p-5 transition-all duration-300 hover:border-primary/30 group-hover:shadow-[0_0_50px_hsl(175_80%_50%/0.15)]">
                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={collection.images[0]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={collection.images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={collection.images[2]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Collection Info */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-lg">{collection.name}</h3>
                      {collection.verified && (
                        <Verified className="w-4 h-4 text-primary fill-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">by {collection.creator}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{collection.items.toLocaleString()} items</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Floor: </span>
                    <span className="font-display font-bold text-primary">{collection.floorPrice}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
