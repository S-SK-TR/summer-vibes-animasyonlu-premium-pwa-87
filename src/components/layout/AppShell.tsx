import { NavLink, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Calendar, Camera, Shield, Music } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard', icon: Sun, label: 'Dashboard' },
  { to: '/planner', icon: Calendar, label: 'Planner' },
  { to: '/memories', icon: Camera, label: 'Memories' },
  { to: '/sunsafe', icon: Shield, label: 'SunSafe' },
  { to: '/soundscapes', icon: Music, label: 'Soundscapes' }
]

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-dvh bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-solstice-gradient opacity-20"></div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          {children}
        </main>

        {/* Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--glass-bg)]/90 backdrop-blur-glass border-t border-[var(--glass-border)] pb-[env(safe-area-inset-bottom)]">
          <div className="flex h-16">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) => cn(
                  "flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors",
                  isActive ? "text-solstice-500" : "text-[var(--foreground)]/60"
                )}
              >
                <Icon size={22} />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}