import { useEffect } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const activeImage = currentIndex >= 0 ? images[currentIndex] : null

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!activeImage) {
        return
      }

      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onPrev()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {activeImage ? (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4"
          onClick={onClose}
        >
          <Motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[88vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-brand-red"
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-brand-red"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-brand-red"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[88vh] w-full rounded-xl object-contain"
            />

            <p className="mt-3 text-center font-heading text-lg uppercase tracking-wider text-brand-light">
              {activeImage.title}
            </p>
          </Motion.div>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ImageLightbox
