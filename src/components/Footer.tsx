"use client"

import { FileText, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold">EchoNotes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern text editing, simplified. Built by AshEcho
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-muted-foreground hover:text-foreground transition-colors">
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 EchoNotes. All rights reserved. made by ashecho.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/AshEchoYT/echonotes-saas-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
