import { Button } from '@/shared/ui/Button'
import { primaryCtaHref } from '@/shared/config/navigation'
import type { PricingTier } from './PricingTier'
import styles from './PricingTierCard.module.css'

export function PricingTierCard({
  title,
  note,
  pricePrefix,
  priceValue,
  priceHasFill,
  priceSuffix,
  features,
  ctaLabel,
  variant,
}: PricingTier) {
  const classes = variant === 'main' ? `${styles.tier} ${styles.main}` : styles.tier

  return (
    <div className={classes}>
      <p className={styles.note}>{note || ' '}</p>
      <h3>{title}</h3>
      <p className={styles.price}>
        {pricePrefix}
        {priceHasFill ? <span className={styles.fill}>{priceValue}</span> : priceValue}
        {priceSuffix}
      </p>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button
        href={primaryCtaHref}
        variant={variant === 'main' ? 'solid' : 'ghost'}
        className={styles.cta}
      >
        {ctaLabel}
      </Button>
    </div>
  )
}
