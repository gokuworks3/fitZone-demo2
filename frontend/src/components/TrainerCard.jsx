import { motion as Motion } from 'framer-motion'
import { Instagram, Twitter } from 'lucide-react'

const TrainerCard = ({ trainer }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-soft/80 backdrop-blur transition-all duration-300 hover:border-brand-red/25 hover:shadow-lg hover:shadow-brand-red/10"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Social links overlay */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={trainer.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black/60 p-2 text-brand-light backdrop-blur-sm transition hover:bg-brand-red"
            aria-label={`${trainer.name} on Instagram`}
          >
            <Instagram size={16} />
          </a>
          <a
            href={trainer.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black/60 p-2 text-brand-light backdrop-blur-sm transition hover:bg-brand-red"
            aria-label={`${trainer.name} on Twitter`}
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold uppercase text-brand-light">
          {trainer.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
          {trainer.specialization}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-brand-red" />
          <p className="text-sm text-brand-muted">{trainer.experience} experience</p>
        </div>
      </div>
    </Motion.article>
  )
}

export default TrainerCard
