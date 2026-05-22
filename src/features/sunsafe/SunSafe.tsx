import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { BentoGrid } from '@/components/ui/BentoGrid'

interface Sunscreen {
  id: string
  name: string
  spf: number
  applied: boolean
}

const sunscreens: Sunscreen[] = [
  { id: '1', name: 'Beach Defender', spf: 50, applied: true },
  { id: '2', name: 'Ocean Guard', spf: 30, applied: false }
]

export function SunSafe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 max-w-7xl mx-auto w-full"
    >
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">SunSafe</h1>

      <GlassCard className="mb-6">
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">UV Protection</h2>
        <div className="flex items-center gap-4">
          <div className="text-4xl">☀️</div>
          <div className="flex-1">
            <p className="text-sm font-medium">Current UV Index</p>
            <p className="text-2xl font-bold text-solstice-500">6</p>
          </div>
        </div>
      </GlassCard>

      <BentoGrid className="mb-6">
        <GlassCard>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Sunscreen</h3>
          <div className="space-y-3">
            {sunscreens.map((sunscreen) => (
              <div key={sunscreen.id} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${sunscreen.applied ? 'bg-solstice-500' : 'bg-[var(--foreground)]/20'}`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{sunscreen.name}</p>
                  <p className="text-xs text-[var(--foreground)]/60">SPF {sunscreen.spf}</p>
                </div>
                <button className="text-xs text-solstice-500">Reapply</button>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Hydration</h3>
          <div className="flex items-center gap-4">
            <div className="text-4xl">💧</div>
            <div className="flex-1">
              <p className="text-sm font-medium">Water Intake</p>
              <p className="text-2xl font-bold text-ocean-500">2L</p>
            </div>
          </div>
        </GlassCard>
      </BentoGrid>

      <GlassCard>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Reminders</h2>
        <button className="w-full h-12 bg-solstice-500/10 hover:bg-solstice-500/20 rounded-lg text-sm font-medium transition-colors">
          Set Sunscreen Alarm
        </button>
      </GlassCard>
    </motion.div>
  )
}