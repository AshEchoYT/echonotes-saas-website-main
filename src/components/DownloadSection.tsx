"use client"

import { Download, HardDrive, Monitor, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the system requirements?",
    answer: "EchoNotes requires Windows 10 or later (64-bit). Minimum 4GB RAM recommended for optimal performance. Disk space required: 150MB for installation."
  },
  {
    question: "Is EchoNotes really free?",
    answer: "Yes! EchoNotes is completely free and open-source under the MIT license. No hidden fees, no subscriptions, no premium tiers."
  },
  {
    question: "How do I install EchoNotes?",
    answer: "Download the installer, run the .exe file, follow the installation wizard. You can choose to create desktop shortcuts and file associations during installation."
  },
  {
    question: "What's the difference between installer and portable?",
    answer: "The installer version integrates with Windows (file associations, Start Menu). The portable version runs without installation, perfect for USB drives."
  },
  {
    question: "Can I use EchoNotes for coding?",
    answer: "Absolutely! EchoNotes supports 19+ file types including JavaScript, TypeScript, Python, Java, C++, HTML, CSS, and more. Perfect for quick edits and lightweight development."
  },
  {
    question: "Does it support other operating systems?",
    answer: "Currently, EchoNotes is available for Windows only. macOS and Linux versions are planned for future releases."
  },
]

export function DownloadSection() {
  return (
    <section id="download" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Get Started{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download EchoNotes and experience modern text editing at its finest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="glass-card border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Windows Installer</CardTitle>
              <CardDescription className="text-base">
                Full installation with file associations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  <span>Size: 96.28 MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Windows 10 or later (64-bit)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  <span>Version 1.0.0 (Latest)</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                asChild
              >
                <a href="/EchoNotes-Setup-1.0.0.exe" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Installer
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <HardDrive className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Portable Version</CardTitle>
              <CardDescription className="text-base">
                No installation required, run from anywhere
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4" />
                  <span>Size: 470 MB (ZIP Archive)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Windows 10 or later (64-bit)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  <span>Version 1.0.0 (Latest)</span>
                </div>
              </div>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full"
                asChild
              >
                <a href="/release.zip" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Portable
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-white/20 dark:border-white/10 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
