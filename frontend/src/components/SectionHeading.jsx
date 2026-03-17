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
        <div className={`mb-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="inline-block h-[2px] w-8 bg-brand-red" />
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
            {eyebrow}
          </p>
          {align === 'center' && <span className="inline-block h-[2px] w-8 bg-brand-red" />}
        </div>
      ) : null}
      <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-brand-light sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Motion.div>
  )
}

export default SectionHeading
