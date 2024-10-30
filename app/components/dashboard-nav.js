'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FileText,
  Users,
  Building2,
  Settings,
  Image,
  MessageSquare,
  BarChart2,
  Newspaper,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { signOut } from '@/lib/auth'

const routes = [
  {
    label: 'Overview',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Blog Posts',
    icon: FileText,
    href: '/dashboard/blog',
  },
  {
    label: 'Team Members',
    icon: Users,
    href: '/dashboard/team',
  },
  {
    label: 'Projects',
    icon: Building2,
    href: '/dashboard/projects',
  },
  {
    label: 'Services',
    icon: MessageSquare,
    href: '/dashboard/services',
  },
  {
    label: 'Media Library',
    icon: Image,
    href: '/dashboard/media',
  },
  {
    label: 'Analytics',
    icon: BarChart2,
    href: '/dashboard/analytics',
  },
  {
    label: 'News & Updates',
    icon: Newspaper,
    href: '/dashboard/news',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="relative flex flex-col h-screen border-r bg-muted/10">
      <div className="p-6">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Link key={route.href} href={route.href}>
                <span
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent',
                    pathname === route.href ? 'bg-accent' : 'transparent'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </span>
              </Link>
            )
          })}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={async () => {
            await signOut()
            window.location.href = '/login'
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}