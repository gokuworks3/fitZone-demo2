import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import ProgramCard from '../components/ProgramCard'
import SectionHeading from '../components/SectionHeading'
import { programs } from '../data/siteData'
import { ArrowRight } from 'lucide-react'

const Programs = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Programs"
          title="Train Smarter. Perform Stronger."
          description="Choose from our signature training programs designed for strength, endurance, mobility, and complete body transformation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card mx-auto inline-block p-8">
            <p className="font-heading text-2xl uppercase text-brand-light sm:text-3xl">Not Sure Where to Start?</p>
            <p className="mt-3 text-sm text-brand-muted">Our coaches will help you find the perfect program for your fitness level and goals.</p>
            <Link to="/contact" className="primary-btn mt-6 inline-flex items-center gap-2">
              Talk to a Coach <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Programs
