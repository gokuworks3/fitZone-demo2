import { motion as Motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const TrainerCard = ({ trainer }) => {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-brand-soft/80 backdrop-blur"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold uppercase text-brand-light">
          {trainer.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-red">
          {trainer.specialization}
        </p>
        <p className="mt-2 text-sm text-brand-muted">{trainer.experience} experience</p>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={trainer.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
            aria-label={`${trainer.name} on Instagram`}
          >
            <Instagram size={16} />
          </a>
          <a
            href={trainer.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
            aria-label={`${trainer.name} on Facebook`}
          >
            <Facebook size={16} />
          </a>
          <a
            href={trainer.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
            aria-label={`${trainer.name} on Twitter`}
          >
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </Motion.article>
  )
}

export default TrainerCard
