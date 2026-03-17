import PageTransition from '../components/PageTransition'
import ProgramCard from '../components/ProgramCard'
import SectionHeading from '../components/SectionHeading'
import { programs } from '../data/siteData'

const Programs = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Programs"
          title="Train Smarter. Perform Stronger."
          description="Choose from our signature training programs designed for strength, endurance, mobility, and complete body transformation."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Programs
