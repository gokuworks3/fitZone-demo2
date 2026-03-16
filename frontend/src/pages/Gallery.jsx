import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import ImageLightbox from '../components/ImageLightbox'
import { galleryImages } from '../data/siteData'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside FitZone"
          description="Explore our training floors, equipment zones, and high-energy workout environment."
        />

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, index) => (
            <Motion.button
              type="button"
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setSelectedImage(item)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-white/10 text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="font-heading text-lg uppercase text-brand-light">{item.title}</p>
              </div>
            </Motion.button>
          ))}
        </div>
      </section>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </PageTransition>
  )
}

export default Gallery
