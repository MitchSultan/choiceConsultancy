import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { DashboardNav } from '../components/dashboard-nav'

async function checkAdminStatus(userId) {
  const { data, error } = await supabase
    .rpc('is_admin', { user_id: userId })
  
  if (error) throw error
  return data
}

export default async function DashboardLayout({ children }) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  const isAdmin = await checkAdminStatus(user.id)
  
  if (!isAdmin) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}