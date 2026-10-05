import { useState, type KeyboardEvent } from 'react'
import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import { projectCategories } from '@/entities/project'
import styles from './PortfolioSection.module.css'

const tabId = (id: string) => `t-${id}`
const panelId = (id: string) => `g-${id}`

export function PortfolioSection() {
  const [activeId, setActiveId] = useState(projectCategories[0].id)

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!step) return

    const next = projectCategories[(index + step + projectCategories.length) % projectCategories.length]
    setActiveId(next.id)
    document.getElementById(tabId(next.id))?.focus()
  }

  return (
    <Section id="projects">
      <div className={styles.head}>
        <div>
          <SectionHeading
            title="Реализованные проекты"
            description="Квартиры, частные дома и общественные пространства."
          />
        </div>
        <div className={styles.tabs} role="tablist" aria-label="Тип объекта">
          {projectCategories.map((category, index) => {
            const selected = category.id === activeId
            return (
              <button
                key={category.id}
                id={tabId(category.id)}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId(category.id)}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {category.label}
              </button>
            )
          })}
        </div>
      </div>
      {projectCategories.map((category) => (
        <div
          key={category.id}
          id={panelId(category.id)}
          className={styles.gallery}
          role="tabpanel"
          aria-labelledby={tabId(category.id)}
          hidden={category.id !== activeId}
        >
          {category.photos.map((label, index) => (
            <PhotoPlaceholder key={index} label={label} className={styles.photo} />
          ))}
        </div>
      ))}
    </Section>
  )
}
