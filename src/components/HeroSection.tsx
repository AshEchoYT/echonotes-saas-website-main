"use client"

import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950/20 dark:via-background dark:to-blue-950/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Version 1.0 Now Available
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            EchoNotes
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
          Made by ashecho the legend. Made with ❤️ by the community. Made for simple folks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="#download">
              <Download className="mr-2 h-5 w-5" />
              Download for Windows
            </a>
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="https://github.com/AshEchoYT/echonotes-saas-website" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* App screenshot/mockup */}
        <div className="relative animate-fade-in-up animation-delay-600">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 backdrop-blur-sm bg-card/50 p-2">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1762093083460.png?width=8000&height=8000&resize=contain"
              alt="EchoNotes Interface"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}