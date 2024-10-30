'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  Eye, 
  MousePointerClick, 
  Clock,
  TrendingUp,
  FileText,
  Building2,
  Users2
} from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// Mock data - replace with real data from your analytics service
const analyticsData = [
  { name: 'Mon', visits: 2400 },
  { name: 'Tue', visits: 1398 },
  { name: 'Wed', visits: 9800 },
  { name: 'Thu', visits: 3908 },
  { name: 'Fri', visits: 4800 },
  { name: 'Sat', visits: 3800 },
  { name: 'Sun', visits: 4300 },
]

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalVisitors: '12.5K',
    averageTime: '3m 24s',
    bounceRate: '42%',
    clickRate: '65%'
  })

  const [recentActivity, setRecentActivity] = useState([
    { type: 'blog', action: 'created', title: 'New Construction Trends 2024', time: '2 hours ago' },
    { type: 'team', action: 'updated', title: 'John Doe - Senior Architect', time: '3 hours ago' },
    { type: 'project', action: 'deleted', title: 'Urban Development Phase 1', time: '5 hours ago' },
  ])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your website statistics and recent activities.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalVisitors}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Site</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageTime}</div>
            <p className="text-xs text-muted-foreground">
              +1.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.bounceRate}</div>
            <p className="text-xs text-muted-foreground">
              -5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.clickRate}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Visitors Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Visitors Overview</CardTitle>
        </CardHeader>
        <CardContent className="w-full aspect-[2/1]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="visits" 
                stroke="#8884d8" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Content Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Blog Posts</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Services</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pages</span>
              <span className="font-semibold">12</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Projects Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Active Projects</span>
              <span className="font-semibold">15</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Completed</span>
              <span className="font-semibold">32</span>
            </div>
            <div className="flex justify-between items-center">
              <span>In Progress</span>
              <span className="font-semibold">8</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-5 w-5" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Total Members</span>
              <span className="font-semibold">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Departments</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span>New This Month</span>
              <span className="font-semibold">3</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-muted">
                  {activity.type === 'blog' && <FileText className="h-4 w-4" />}
                  {activity.type === 'team' && <Users className="h-4 w-4" />}
                  {activity.type === 'project' && <Building2 className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.action.charAt(0).toUpperCase() + activity.action.slice(1)}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}