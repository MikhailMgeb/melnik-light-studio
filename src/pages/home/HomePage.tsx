import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { LightDemoSection } from '@/widgets/light-demo'
import { ServicesSection } from '@/widgets/services'
import { DesignersSection } from '@/widgets/designers'
import { ProcessSection } from '@/widgets/process'
import { PricingSection } from '@/widgets/pricing'
import { PortfolioSection } from '@/widgets/portfolio'
import { FounderSection } from '@/widgets/founder'
import { StatementSection } from '@/widgets/statement'
import { ContactSection } from '@/widgets/contact'
import { Footer } from '@/widgets/footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LightDemoSection />
        <ServicesSection />
        <DesignersSection />
        <ProcessSection />
        <PricingSection />
        <PortfolioSection />
        <FounderSection />
        <StatementSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
