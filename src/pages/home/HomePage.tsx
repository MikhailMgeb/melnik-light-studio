import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { ReasonsSection } from '@/widgets/reasons'
import { PortfolioSection } from '@/widgets/portfolio'
import { ProcessSection } from '@/widgets/process'
import { ProjectExampleSection, EstimateAuditSection } from '@/widgets/offers'
import { ReviewsSection } from '@/widgets/reviews'
import { DesignersSection } from '@/widgets/designers'
import { FaqSection } from '@/widgets/faq'
import { RequestSection } from '@/widgets/request'
import { Footer } from '@/widgets/footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReasonsSection />
        <PortfolioSection />
        <ProcessSection />
        <ProjectExampleSection />
        <EstimateAuditSection />
        <ReviewsSection />
        <DesignersSection />
        <FaqSection />
        <RequestSection />
      </main>
      <Footer />
    </>
  )
}
