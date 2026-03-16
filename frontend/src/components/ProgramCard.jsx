import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProgramCard = ({ program }) => {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-soft/80 backdrop-blur"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-brand-red/30 bg-black/60 px-3 py-1 text-xs font-semibold text-brand-light">
          {program.difficulty}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold uppercase text-brand-light">
          {program.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          {program.description}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:text-brand-redLight"
        >
          Learn More <ArrowRight size={16} />
        </button>
      </div>
    </Motion.article>
  )
}

export default ProgramCard
