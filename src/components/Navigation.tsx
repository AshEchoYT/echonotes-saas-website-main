"use client"

import { FileText, Github } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold">EchoNotes</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#screenshots" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Screenshots
            </a>
            <a href="#why-choose" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Why Choose
            </a>
            <a href="#download" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Download
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild className="h-10 w-10">
              <a href="https://github.com/AshEchoYT/echonotes-saas-website" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
