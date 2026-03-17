import { motion as Motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <Motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-brand-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-brand-light sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          {description}
        </p>
      ) : null}
    </Motion.div>
  )
}

export default SectionHeading
