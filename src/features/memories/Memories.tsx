import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { BentoGrid } from '@/components/ui/BentoGrid'

interface Memory {
  id: string
  image: string
  date: string
  location: string
}

const memories: Memory[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    date: 'June 15, 2023',
    location: 'Malibu Beach'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    date: 'July 2, 2023',
    location: 'Lake Tahoe'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    date: 'August 10, 2023',
    location: 'Grand Canyon'
  }
]

export function Memories() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 max-w-7xl mx-auto w-full"
    >
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">Summer Memories</h1>

      <BentoGrid className="mb-6">
        {memories.map((memory) => (
          <GlassCard key={memory.id} className="flex flex-col">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <img
                src={memory.image}
                alt={memory.location}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-[var(--foreground)]">{memory.location}</h3>
              <p className="text-xs text-[var(--foreground)]/60">{memory.date}</p>
            </div>
          </GlassCard>
        ))}
      </BentoGrid>

      <GlassCard>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Add New Memory</h2>
        <button className="w-full h-12 bg-solstice-500/10 hover:bg-solstice-500/20 rounded-lg text-sm font-medium transition-colors">
          Take Photo
        </button>
      </GlassCard>
    </motion.div>
  )
}