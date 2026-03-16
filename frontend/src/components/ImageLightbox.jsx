import { AnimatePresence, motion as Motion } from 'framer-motion'
import { X } from 'lucide-react'

const ImageLightbox = ({ selectedImage, onClose }) => {
  return (
    <AnimatePresence>
      {selectedImage ? (
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
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[88vh] w-full rounded-xl object-contain"
            />
          </Motion.div>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ImageLightbox
