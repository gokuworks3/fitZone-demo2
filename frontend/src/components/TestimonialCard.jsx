import { motion as Motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-white/10 bg-brand-soft/80 p-7 backdrop-blur transition-all duration-300 hover:border-brand-red/20 hover:shadow-lg hover:shadow-brand-red/5"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1 text-brand-red">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={16} fill="currentColor" />
          ))}
        </div>
        <Quote size={28} className="text-brand-red/15" />
      </div>

      <p className="text-sm leading-relaxed text-brand-muted italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/15 font-heading text-lg text-brand-red">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-xl uppercase text-brand-light">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-brand-red">{testimonial.role}</p>
        </div>
      </div>
    </Motion.article>
  )
}

export default TestimonialCard
