import { createServerClient } from '@/lib/server-supabase'
import ProjectList from '../components/project-list'

export default async function ProjectsPage() {
  const supabase = createServerClient()
  
  const { data: initialProjects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectList />
    </div>
  )
}