import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Target, Eye, Trophy, Users } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import TrainerCard from '../components/TrainerCard'
import { trainers } from '../data/siteData'

const values = [
  { icon: Target, title: 'Goal-Focused', text: 'Every program is built around measurable outcomes and real progress.' },
  { icon: Trophy, title: 'Results-Driven', text: 'Our methods are proven by thousands of successful transformations.' },
  { icon: Users, title: 'Community First', text: 'A culture of support, accountability, and shared ambition.' },
  { icon: Eye, title: 'Always Evolving', text: 'We invest in the latest training science, equipment, and coaching.' },
]

const milestones = [
  { year: '2014', text: 'FitZone founded as a small local training studio' },
  { year: '2016', text: 'Expanded to a full-scale performance center' },
  { year: '2019', text: 'Reached 2,000 active members milestone' },
  { year: '2022', text: 'Launched premier CrossFit and recovery programs' },
  { year: '2025', text: '3,500+ members, 45+ trainers, and still growing' },
]

const About = () => {
  return (
    <PageTransition>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,72,0.12),transparent_45%)]" />
        <div className="page-top-space section-wrapper">
          <SectionHeading
            eyebrow="About FitZone"
            title="Where Ambition Meets Coaching"
            description="FitZone was founded to give everyday people access to elite-level training experiences in an environment that feels both professional and personal."
          />
        </div>
      </section>

      {/* ── Story Cards ── */}
      <section className="section-wrapper pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card-hover p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-block h-[2px] w-6 bg-brand-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Est. 2014</span>
            </div>
            <h3 className="font-heading text-3xl uppercase text-brand-light lg:text-4xl">Our Story</h3>
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
            className="glass-card-hover p-8"
          >
            <h3 className="font-heading text-3xl uppercase text-brand-light lg:text-4xl">Mission & Vision</h3>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Our mission is to empower every member with expert guidance, premium facilities, and a motivating atmosphere so they can achieve measurable results.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Our vision is to become the most trusted transformation-focused fitness brand by blending science-backed programming with a culture that celebrates progress at every level.
            </p>
            <div className="mt-8 rounded-xl border border-brand-red/25 bg-gradient-to-r from-brand-red/10 to-transparent p-5">
              <p className="text-sm font-medium italic text-brand-light">
                &ldquo;Discipline builds momentum. Momentum builds transformation.&rdquo;
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-brand-red">- FitZone Philosophy</p>
            </div>
          </Motion.article>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Our Values"
          title="What Drives Us"
          description="The principles that shape every training session, every program, and every interaction."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover group p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-brand-red/10 p-3">
                <item.icon size={24} className="text-brand-red" />
              </div>
              <h4 className="font-heading text-xl uppercase text-brand-light">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.text}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones"
        />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          {milestones.map((item, index) => (
            <Motion.div
              key={item.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className={`relative mb-8 pl-12 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'}`}
            >
              <div className={`absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-brand-red bg-brand-black sm:left-auto ${index % 2 === 0 ? 'sm:-right-[7px]' : 'sm:-left-[7px]'}`} />
              <span className="font-heading text-2xl text-brand-red">{item.year}</span>
              <p className="mt-1 text-sm leading-relaxed text-brand-muted">{item.text}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── Coaches Preview ── */}
      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coach Preview"
          description="Our trainers combine expertise, accountability, and real-world transformation experience."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {trainers.slice(0, 2).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/trainers" className="secondary-btn inline-flex items-center gap-2">
            View All Trainers
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
