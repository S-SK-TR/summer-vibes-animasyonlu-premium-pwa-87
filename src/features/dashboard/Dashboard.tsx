import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { BentoGrid } from '@/components/ui/BentoGrid'

interface DashboardItem {
  id: string
  title: string
  content: React.ReactNode
}

const dashboardItems: DashboardItem[] = [
  {
    id: 'greeting',
    title: 'Welcome to Solstice',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-solstice-500">Summer Vibes</h2>
        <p className="text-sm text-[var(--foreground)]/70 mt-2">Your premium summer companion</p>
      </div>
    )
  },
  {
    id: 'quick-actions',
    title: 'Quick Actions',
    content: (
      <div className="space-y-3">
        <button className="w-full h-12 bg-solstice-500/10 hover:bg-solstice-500/20 rounded-lg text-sm font-medium transition-colors">
          Add Memory
        </button>
        <button className="w-full h-12 bg-solstice-500/10 hover:bg-solstice-500/20 rounded-lg text-sm font-medium transition-colors">
          Plan Activity
        </button>
      </div>
    )
  },
  {
    id: 'upcoming',
    title: 'Upcoming',
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-solstice-500"></div>
          <p className="text-sm">Beach day at 2pm</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-solstice-500"></div>
          <p className="text-sm">Sunscreen reminder</p>
        </div>
      </div>
    )
  }
]

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 max-w-7xl mx-auto w-full"
    >
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">Dashboard</h1>

      <BentoGrid className="mb-6">
        {dashboardItems.map((item) => (
          <GlassCard key={item.id} className={item.id === 'greeting' ? 'md:col-span-2' : ''}>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">{item.title}</h3>
            {item.content}
          </GlassCard>
        ))}
      </BentoGrid>
    </motion.div>
  )
}