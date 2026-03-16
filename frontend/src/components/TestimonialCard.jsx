import { motion as Motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <Motion.article
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/10 bg-brand-soft/80 p-6 backdrop-blur"
    >
      <div className="mb-4 flex items-center gap-1 text-brand-red">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-brand-muted">"{testimonial.quote}"</p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="font-heading text-xl uppercase text-brand-light">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-brand-red">{testimonial.role}</p>
      </div>
    </Motion.article>
  )
}

export default TestimonialCard
