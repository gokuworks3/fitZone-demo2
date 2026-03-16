import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Dumbbell, Flame, HeartPulse } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import { programs, stats, testimonials } from '../data/siteData'

const featuredPrograms = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Precision-built routines to maximize muscle growth and power.',
  },
  {
    icon: Flame,
    title: 'Fat Burn Systems',
    description: 'High-output sessions to push endurance and accelerate results.',
  },
  {
    icon: HeartPulse,
    title: 'Athletic Conditioning',
    description: 'Performance programs designed for stamina and mobility.',
  },
]

const Home = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1800&q=80"
          alt="FitZone gym training"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,46,46,0.35),transparent_48%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Train With Purpose
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight text-brand-light sm:text-6xl lg:text-7xl">
              Transform Your Body at FitZone
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Premium coaching, world-class equipment, and a community that refuses average. Push limits and build your strongest self.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/membership" className="primary-btn text-center">
                Join Now
              </Link>
              <Link to="/membership" className="secondary-btn text-center">
                View Plans
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="section-wrapper">
        <SectionHeading
          eyebrow="Why FitZone"
          title="Featured Workout Programs"
          description="Specialized systems for every goal, from strength gains to peak conditioning."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPrograms.map((item, index) => (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur"
            >
              <item.icon className="text-brand-red" size={28} />
              <h3 className="mt-4 font-heading text-2xl uppercase text-brand-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </Motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <Motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="rounded-xl border border-white/10 bg-black/45 px-6 py-5 text-center"
          >
            <p className="font-heading text-4xl font-bold uppercase text-brand-red">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-muted">{stat.label}</p>
          </Motion.div>
        ))}
      </section>

      <section className="section-wrapper">
        <SectionHeading
          eyebrow="Programs"
          title="Build Your Next Level"
          description="From heavy lifts to deep recovery, choose a training style that matches your ambition."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Members Say"
          description="Results are built through discipline, but the right environment makes all the difference."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
