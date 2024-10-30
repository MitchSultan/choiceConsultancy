"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Building2, TreePine, Ruler } from "lucide-react"

const services = [
  {
    title: "Electrical & Mechanical Services",
    description: "Comprehensive electrical and mechanical engineering solutions for construction projects of all sizes. We ensure safe, efficient, and sustainable installations.",
    icon: Zap,
    link: "/services/electrical-mechanical"
  },
  {
    title: "Planning Services",
    description: "Expert construction planning and project management services to ensure your project is delivered on time and within budget.",
    icon: Ruler,
    link: "/services/planning"
  },
  {
    title: "Rural Development",
    description: "Specialized construction and development services for rural areas, focusing on sustainable development and community needs.",
    icon: TreePine,
    link: "/services/rural-development"
  },
  {
    title: "Building Construction",
    description: "Full-service building construction for commercial, residential, and industrial projects with a focus on quality and sustainability.",
    icon: Building2,
    link: "/services/building-construction"
  }
]

export default function ServicesSection() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const ServiceCard = ({ service }) => {
    const Icon = service.icon
    return (
      <Card className="h-full flex flex-col justify-between p-5 ">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">{service.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4">
            {service.description}
          </CardDescription>
          
        </CardContent>
        <Button className=" min-w-16" asChild variant="outline">
            <Link href={service.link}>Learn More</Link>
          </Button>
      </Card>
    )
  }

  if (isMobile) {
    return (
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
        <CarouselPrevious className="left-0"/>
          <CarouselNext className="right-0"  />
          
        </Carousel>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}