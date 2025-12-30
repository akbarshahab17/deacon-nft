import { motion } from 'framer-motion';
import { Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NFTCardProps {
  image: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  price: string;
  likes: number;
  timeLeft?: string;
  index?: number;
}

const NFTCard = ({ image, title, creator, creatorAvatar, price, likes, timeLeft, index = 0 }: NFTCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="glass-card rounded-2xl p-3 transition-all duration-300 hover:border-primary/30 group-hover:shadow-[0_0_40px_hsl(175_80%_50%/0.15)]">
        {/* Image Container */}
        <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="w-4 h-4 text-foreground" />
          </motion.button>

          {/* Timer Badge */}
          {timeLeft && (
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full glass-card text-xs font-medium flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-primary" />
              <span>{timeLeft}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-1">
          <h3 className="font-display font-semibold text-foreground mb-2 truncate">{title}</h3>
          
          <div className="flex items-center gap-2 mb-4">
            <img
              src={creatorAvatar}
              alt={creator}
              className="w-6 h-6 rounded-full object-cover ring-2 ring-primary/20"
            />
            <span className="text-sm text-muted-foreground">@{creator}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground">Current Price</p>
              <p className="font-display font-bold text-primary">{price}</p>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{likes}</span>
            </div>
          </div>

          <Button variant="glass" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            Place Bid
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
