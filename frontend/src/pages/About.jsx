import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TrainerCard from '../components/TrainerCard'
import { trainers } from '../data/siteData'

const About = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="About FitZone"
          title="Where Ambition Meets Coaching"
          description="FitZone was founded to give everyday people access to elite-level training experiences in an environment that feels both professional and personal."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-white/10 bg-black/45 p-7"
          >
            <h3 className="font-heading text-3xl uppercase text-brand-light">Our Story</h3>
            <p className="mt-4 leading-relaxed text-brand-muted">
              What started as a small local training studio evolved into a full-scale performance center. Over the past decade, FitZone has helped thousands of members improve strength, reduce body fat, and build lasting confidence through structured coaching and a proven training ecosystem.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              We believe fitness is not a trend. It is a lifestyle built through consistency, discipline, and support from people who understand your goals.
            </p>
          </Motion.article>

          <Motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-white/10 bg-black/45 p-7"
          >
            <h3 className="font-heading text-3xl uppercase text-brand-light">Mission & Vision</h3>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Our mission is to empower every member with expert guidance, premium facilities, and a motivating atmosphere so they can achieve measurable results.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Our vision is to become the most trusted transformation-focused fitness brand by blending science-backed programming with a culture that celebrates progress at every level.
            </p>
            <div className="mt-8 rounded-xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-light">
              "Discipline builds momentum. Momentum builds transformation."
            </div>
          </Motion.article>
        </div>
      </section>

      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coach Preview"
          description="Our trainers combine expertise, accountability, and real-world transformation experience."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {trainers.slice(0, 2).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-10">
          <Link to="/trainers" className="secondary-btn">
            View All Trainers
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
