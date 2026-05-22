import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn(
      "glass-card p-4 md:p-6 rounded-glass",
      className
    )}>
      {children}
    </div>
  )
}