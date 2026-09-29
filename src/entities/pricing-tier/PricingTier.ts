export interface PricingTier {
  title: string
  note: string
  pricePrefix?: string
  priceValue: string
  priceHasFill: boolean
  priceSuffix?: string
  features: string[]
  ctaLabel: string
  variant: 'default' | 'main'
}
