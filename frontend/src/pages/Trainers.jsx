import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TrainerCard from '../components/TrainerCard'
import { trainers } from '../data/siteData'

const Trainers = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Our Trainers"
          title="Coaches Who Push You Forward"
          description="Every FitZone trainer is certified, results-focused, and committed to helping you train with precision and confidence."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Trainers
