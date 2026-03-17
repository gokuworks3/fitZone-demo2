import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper flex min-h-[70vh] items-center justify-center">
        <div className="max-w-xl text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-heading text-8xl text-brand-red sm:text-9xl">404</p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mt-4 font-heading text-4xl uppercase text-brand-light sm:text-5xl">Page Not Found</h1>
            <p className="mt-4 text-brand-muted">
              The page you are looking for does not exist or may have been moved.
            </p>
            <Link to="/" className="primary-btn mt-8 inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
