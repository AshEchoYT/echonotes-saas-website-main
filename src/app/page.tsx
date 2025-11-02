"use client"

import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ScreenshotsSection } from "@/components/ScreenshotsSection"
import { WhyChooseSection } from "@/components/WhyChooseSection"
import { DownloadSection } from "@/components/DownloadSection"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="echonotes-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ScreenshotsSection />
          <WhyChooseSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}