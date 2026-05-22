import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { BentoGrid } from '@/components/ui/BentoGrid'

interface Activity {
  id: string
  time: string
  title: string
  location: string
}

const activities: Activity[] = [
  { id: '1', time: '9:00 AM', title: 'Breakfast', location: 'Home' },
  { id: '2', time: '11:00 AM', title: 'Beach Trip', location: 'Sunset Beach' },
  { id: '3', time: '2:00 PM', title: 'Swimming', location: 'Pool' },
  { id: '4', time: '5:00 PM', title: 'Dinner', location: 'Restaurant' }
]

export function Planner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 max-w-7xl mx-auto w-full"
    >
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">Summer Planner</h1>

      <GlassCard className="mb-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Today's Schedule</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-solstice-500">{activity.time}</div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-[var(--foreground)]">{activity.title}</h3>
                <p className="text-xs text-[var(--foreground)]/60">{activity.location}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <BentoGrid>
        <GlassCard>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Add</h3>
          <button className="w-full h-12 bg-solstice-500/10 hover:bg-solstice-500/20 rounded-lg text-sm font-medium transition-colors">
            Add Activity
          </button>
        </GlassCard>
        <GlassCard>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Weather</h3>
          <div className="flex items-center gap-3">
            <div className="text-3xl">☀️</div>
            <div>
              <p className="text-sm font-medium">Sunny</p>
              <p className="text-xs text-[var(--foreground)]/60">28°C</p>
            </div>
          </div>
        </GlassCard>
      </BentoGrid>
    </motion.div>
  )
}