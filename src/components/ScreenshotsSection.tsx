"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const screenshots = [
  {
    title: "Multi-Tab Interface",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1762093083460.png?width=8000&height=8000&resize=contain",
    description: "Work on multiple files with independent history"
  },
  {
    title: "Dark Mode Excellence",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1762093097342.png?width=8000&height=8000&resize=contain",
    description: "Eye-friendly dark theme for late-night coding"
  },
  {
    title: "Find & Replace",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1762093142606.png?width=8000&height=8000&resize=contain",
    description: "Powerful search with wrap-around support"
  },
]

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/50 to-blue-50/50 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-blue-950/10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            See It in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful, intuitive interface designed for productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index}
              className="glass-card overflow-hidden border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}