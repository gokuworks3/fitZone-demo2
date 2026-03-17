import { CheckCircle2 } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PricingCard = ({ plan }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-2xl border bg-black/55 p-8 backdrop-blur transition-all duration-300 ${
        plan.popular
          ? 'border-brand-red shadow-2xl shadow-brand-red/25 animate-pulse-glow'
          : 'border-white/10 hover:border-brand-red/25'
      }`}
    >
      {plan.popular ? (
        <>
          <span className="absolute -top-3 right-6 rounded-full bg-brand-red px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-red/30">
            Most Popular
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-transparent" />
        </>
      ) : null}

      <div className="relative">
        <h3 className="font-heading text-3xl font-bold uppercase text-brand-light">
          {plan.name}
        </h3>
        <div className="mt-4 flex items-end gap-1">
          <span className="font-heading text-5xl font-bold text-brand-light">{plan.price}</span>
          <span className="mb-2 text-sm text-brand-muted">{plan.duration}</span>
        </div>

        <div className="my-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-brand-muted">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-red" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/membership"
          className={`mt-8 block w-full rounded-lg px-4 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
            plan.popular
              ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-brand-redDark hover:shadow-brand-red/40'
              : 'border border-white/20 text-brand-light hover:border-brand-red/60 hover:bg-brand-red/10'
          }`}
        >
          Get Started
        </Link>
      </div>
    </Motion.article>
  )
}

export default PricingCard
