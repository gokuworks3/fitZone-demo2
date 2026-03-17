import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { Dumbbell, Flame, HeartPulse, ArrowRight, Clock, Users, Award, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import ProgramCard from '../components/ProgramCard'
import TestimonialCard from '../components/TestimonialCard'
import AnimatedCounter from '../components/AnimatedCounter'
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

const statIcons = [Users, Award, Clock, Zap]

const brandLogos = [
  'Nike', 'Adidas', 'Under Armour', 'Reebok', 'Puma',
]

const Home = () => {
  return (
    <PageTransition>
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1800&q=80"
          alt="FitZone gym training"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,46,46,0.35),transparent_48%)]" />

        {/* Decorative grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'none\' stroke=\'%23fff\' stroke-width=\'.5\'/%3E%3C/svg%3E")' }} />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="inline-block h-[2px] w-10 bg-brand-red" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
                Train With Purpose
              </p>
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-heading text-5xl font-bold uppercase leading-[0.95] text-brand-light sm:text-7xl lg:text-8xl"
            >
              Transform <br />
              <span className="text-gradient-red">Your Body</span> <br />
              at FitZone
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg"
            >
              Premium coaching, world-class equipment, and a community that refuses average. Push limits and build your strongest self.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/membership" className="primary-btn inline-flex items-center justify-center gap-2 text-center">
                Start Your Journey <ArrowRight size={16} />
              </Link>
              <Link to="/programs" className="secondary-btn text-center">
                Explore Programs
              </Link>
            </Motion.div>

            {/* Quick stat badges in hero */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {[
                { val: '3,500+', label: 'Members' },
                { val: '45+', label: 'Trainers' },
                { val: '12+', label: 'Years' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="font-heading text-2xl text-brand-red sm:text-3xl">{item.val}</span>
                  <span className="text-xs uppercase tracking-widest text-brand-muted">{item.label}</span>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Scroll</span>
            <span className="h-8 w-[1px] bg-gradient-to-b from-brand-red to-transparent" />
          </Motion.div>
        </Motion.div>
      </section>

      {/* ── Trusted By / Partners ── */}
      <section className="border-b border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-brand-muted/60">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {brandLogos.map((name) => (
              <span
                key={name}
                className="font-heading text-2xl uppercase tracking-wider text-white/15 transition-colors duration-300 hover:text-white/30 sm:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Programs ── */}
      <section className="section-wrapper">
        <SectionHeading
          eyebrow="Why FitZone"
          title="Featured Workout Programs"
          description="Specialized systems for every goal, from strength gains to peak conditioning."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredPrograms.map((item, index) => (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover group p-8"
            >
              <div className="mb-5 inline-flex rounded-xl bg-brand-red/10 p-3">
                <item.icon className="text-brand-red" size={28} />
              </div>
              <h3 className="font-heading text-2xl uppercase text-brand-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              <div className="mt-5 h-[2px] w-0 bg-brand-red transition-all duration-500 group-hover:w-12" />
            </Motion.article>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08),transparent_65%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-black/45 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-red/25"
            >
              <div className="mx-auto mb-4 inline-flex rounded-full bg-brand-red/10 p-3">
                {(() => {
                  const Icon = statIcons[index] || Users
                  return <Icon size={22} className="text-brand-red" />
                })()}
              </div>
              <p className="font-heading text-4xl font-bold uppercase text-brand-red sm:text-5xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-brand-muted">{stat.label}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="section-wrapper">
        <SectionHeading
          eyebrow="Programs"
          title="Build Your Next Level"
          description="From heavy lifts to deep recovery, choose a training style that matches your ambition."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/programs" className="secondary-btn inline-flex items-center gap-2">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-wrapper pt-0">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Members Say"
          description="Results are built through discipline, but the right environment makes all the difference."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(225,29,72,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="font-heading text-4xl font-bold uppercase text-brand-light sm:text-5xl lg:text-6xl">
                Ready to Transform?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                Join thousands of members who are already building their strongest selves. Your first session is on us.
              </p>
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/membership" className="primary-btn inline-flex items-center gap-2 text-center">
                Get Started Today <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="secondary-btn text-center">
                Talk to a Coach
              </Link>
            </Motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
