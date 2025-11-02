"use client"

import { Layers, Zap, Moon, History, Search, Type, FileCode, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Layers,
    title: "Multi-Tab Editing",
    description: "Work on multiple files simultaneously with independent content, history, and settings per tab.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Electron and React for blazing-fast performance and smooth animations.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Eye-friendly dark mode with smooth transitions and consistent styling across all components.",
  },
  {
    icon: History,
    title: "Unlimited Undo/Redo",
    description: "Never lose your work with comprehensive history management and cursor position preservation.",
  },
  {
    icon: Search,
    title: "Find & Replace",
    description: "Powerful search with wrap-around, replace single or all occurrences, and visual feedback.",
  },
  {
    icon: Type,
    title: "Font Customization",
    description: "Adjust font size from 10px to 32px with real-time preview and monospace support.",
  },
  {
    icon: FileCode,
    title: "19+ File Types",
    description: "Support for txt, md, json, js, jsx, ts, tsx, py, java, c, cpp, html, css, xml, yaml, and more.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Modern interface with glassmorphism effects, smooth animations, and professional design.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern Editing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for efficient text editing, all in one beautiful package
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}