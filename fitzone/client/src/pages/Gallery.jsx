import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import ImageLightbox from '../components/ImageLightbox'
import { galleryImages } from '../data/siteData'

const categories = ['All', 'Training', 'Equipment', 'Classes']

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleClose = () => {
    setCurrentIndex(-1)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? galleryImages.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= galleryImages.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside FitZone"
          description="Explore our training floors, equipment zones, and high-energy workout environment."
        />

        {/* Category filters (decorative) */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((cat, index) => (
            <button
              key={cat}
              type="button"
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                index === 0
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25'
                  : 'border border-white/15 text-brand-muted hover:border-brand-red/40 hover:text-brand-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, index) => (
            <Motion.button
              type="button"
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setCurrentIndex(index)}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-300 hover:border-brand-red/25 hover:shadow-lg hover:shadow-brand-red/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="font-heading text-lg uppercase text-brand-light">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-brand-red">View Full</p>
                </div>
              </div>
            </Motion.button>
          ))}
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </PageTransition>
  )
}

export default Gallery
