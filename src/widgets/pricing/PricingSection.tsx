import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { pricingTiers, PricingTierCard } from '@/entities/pricing-tier'
import styles from './PricingSection.module.css'

export function PricingSection() {
  return (
    <section id="prices">
      <Container>
        <SectionHeading
          title="Ориентировочные цены"
          description="Точную стоимость называем после знакомства с объектом и чертежами. Всё, что войдёт в смету, вы увидите в спецификации."
        />
        <div className={styles.tiers}>
          {pricingTiers.map((tier) => (
            <PricingTierCard key={tier.title} {...tier} />
          ))}
        </div>
        <p className={styles.fine}>Первая консультация по объекту бесплатна.</p>
      </Container>
    </section>
  )
}
