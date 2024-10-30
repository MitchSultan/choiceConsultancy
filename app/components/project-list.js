'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function ProjectList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch projects
  async function fetchProjects() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      if (data) {
        setProjects(data)
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Create a new project
  async function createProject(projectData) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select()

      if (error) {
        throw error
      }

      if (data) {
        setProjects([...projects, ...data])
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  // Update a project
  async function updateProject(id, updates) {
    try {
      const { error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)

      if (error) {
        throw error
      }

      // Refresh the projects list
      fetchProjects()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  // Delete a project
  async function deleteProject(id) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (error) {
        throw error
      }

      setProjects(projects.filter(project => project.id !== id))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  // Subscribe to real-time changes
  useEffect(() => {
    fetchProjects()

    const channel = supabase
      .channel('projects_channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects'
        },
        (payload) => {
          console.log('Change received!', payload)
          fetchProjects()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  if (loading) {
    return <div>Loading projects...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="space-y-4">
      <Button
        onClick={() =>
          createProject({
            title: 'New Project',
            description: 'Project description',
            status: 'pending'
          })
        }
      >
        Add New Project
      </Button>

      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>Status: {project.status}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outline"
                onClick={() =>
                  updateProject(project.id, {
                    status: project.status === 'pending' ? 'completed' : 'pending'
                  })
                }
              >
                Toggle Status
              </Button>
              <Button
                variant="destructive"
                onClick={() => deleteProject(project.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}