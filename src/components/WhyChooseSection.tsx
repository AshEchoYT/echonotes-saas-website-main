"use client"

import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const comparisons = [
  { feature: "Multi-tab editing", echonotes: true, notepad: false, vscode: true },
  { feature: "Lightning fast startup", echonotes: true, notepad: true, vscode: false },
  { feature: "Beautiful dark mode", echonotes: true, notepad: false, vscode: true },
  { feature: "Find & replace", echonotes: true, notepad: true, vscode: true },
  { feature: "File associations", echonotes: true, notepad: true, vscode: true },
  { feature: "Lightweight (< 100MB)", echonotes: true, notepad: true, vscode: false },
  { feature: "Modern UI/UX", echonotes: true, notepad: false, vscode: true },
  { feature: "Undo/redo history", echonotes: true, notepad: true, vscode: true },
  { feature: "Portable version", echonotes: true, notepad: true, vscode: false },
  { feature: "Free & open source", echonotes: true, notepad: true, vscode: true },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              EchoNotes?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The perfect balance of power, simplicity, and elegance
          </p>
        </div>

        <Card className="glass-card border-white/20 dark:border-white/10 max-w-5xl mx-auto overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-b border-white/10">
            <CardTitle className="text-2xl">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-purple-600 dark:text-purple-400">EchoNotes</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Notepad</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">VS Code</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 text-sm">{item.feature}</td>
                      <td className="text-center p-4">
                        {item.echonotes ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500/20">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-500/20">
                            <X className="h-4 w-4 text-red-500" />
                          </div>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {item.notepad ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500/10">
                            <Check className="h-4 w-4 text-green-500/50" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-500/10">
                            <X className="h-4 w-4 text-red-500/50" />
                          </div>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {item.vscode ? (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500/10">
                            <Check className="h-4 w-4 text-green-500/50" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-500/10">
                            <X className="h-4 w-4 text-red-500/50" />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
