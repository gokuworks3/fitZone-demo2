import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card mx-auto inline-block p-8">
            <p className="font-heading text-2xl uppercase text-brand-light sm:text-3xl">Ready to Train with the Best?</p>
            <p className="mt-3 text-sm text-brand-muted">Join FitZone and get matched with a coach who fits your goals.</p>
            <Link to="/membership" className="primary-btn mt-6 inline-flex items-center gap-2">
              Join Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Trainers
