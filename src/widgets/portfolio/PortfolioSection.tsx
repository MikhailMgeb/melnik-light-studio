import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { projects, ProjectCard } from '@/entities/project'
import styles from './PortfolioSection.module.css'

export function PortfolioSection() {
  return (
    <section id="works">
      <Container>
        <SectionHeading
          title="Проекты"
          description="Интерьеры, в которых мы отвечали за свет, — вместе с дизайнерами и бюро, с которыми работали."
        />
        <div className={styles.works}>
          {projects.map((project) => (
            <ProjectCard key={project.meta} {...project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
