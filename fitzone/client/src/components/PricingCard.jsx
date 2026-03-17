import { CheckCircle2 } from 'lucide-react'
import { motion as Motion } from 'framer-motion'

const PricingCard = ({ plan }) => {
  return (
    <Motion.article
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl border bg-black/55 p-7 backdrop-blur ${
        plan.popular
          ? 'border-brand-red shadow-2xl shadow-brand-red/30'
          : 'border-white/10'
      }`}
    >
      {plan.popular ? (
        <span className="absolute -top-3 right-6 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Most Popular
        </span>
      ) : null}

      <h3 className="font-heading text-3xl font-bold uppercase text-brand-light">
        {plan.name}
      </h3>
      <p className="mt-3 flex items-end gap-1 font-heading text-4xl font-bold text-brand-light">
        {plan.price}
        <span className="pb-1 text-sm font-body text-brand-muted">{plan.duration}</span>
      </p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-brand-muted">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-red" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition ${
          plan.popular
            ? 'bg-brand-red text-white hover:bg-brand-redDark'
            : 'border border-white/20 text-brand-light hover:border-brand-red/60 hover:bg-brand-red/10'
        }`}
      >
        Get Started
      </button>
    </Motion.article>
  )
}

export default PricingCard
