import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { services, ServiceRow } from '@/entities/service'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  return (
    <section id="services">
      <Container>
        <SectionHeading
          title="Берём на себя техническую часть света"
          description="Дизайнер отвечает за образ пространства, мы — за то, чтобы свет его поддержал: в нужном количестве, нужного качества и в нужных местах."
        />
        <ul className={styles.list}>
          {services.map((service) => (
            <ServiceRow key={service.title} {...service} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
