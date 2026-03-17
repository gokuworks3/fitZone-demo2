import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <section className="page-top-space section-wrapper flex min-h-[60vh] items-center justify-center">
        <div className="max-w-xl rounded-2xl border border-white/10 bg-black/45 p-6 text-center sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-red">404 Error</p>
          <h1 className="mt-4 font-heading text-4xl uppercase text-brand-light sm:text-5xl">Page Not Found</h1>
          <p className="mt-4 text-brand-muted">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Link to="/" className="primary-btn mt-7 inline-flex">
            Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
