import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItemClass = ({ isActive }) =>
    `relative text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
      isActive ? 'text-brand-light' : 'text-brand-muted hover:text-brand-light'
    }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled || isOpen
          ? 'border-b border-white/10 bg-black/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="inline-block h-9 w-2 rounded-full bg-brand-red shadow-lg shadow-brand-red/30" />
          <div>
            <p className="font-heading text-3xl font-bold uppercase leading-none text-brand-light">
              FitZone
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">
              Train Harder
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navItemClass}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <Motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-full rounded-full bg-brand-red"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link to="/membership" className="primary-btn" onClick={() => setIsOpen(false)}>
            Join Now
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/15 p-2 text-brand-light transition-colors duration-300 hover:border-brand-red/50 hover:text-brand-red lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 pb-5 pt-4">
              {navLinks.map((link, index) => (
                <Motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${
                        isActive
                          ? 'bg-brand-red/15 text-brand-light'
                          : 'text-brand-muted hover:bg-white/5 hover:text-brand-light'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-brand-red' : 'bg-white/20'}`} />
                        {link.label}
                      </>
                    )}
                  </NavLink>
                </Motion.div>
              ))}
            </nav>
            <div className="px-4 pb-5">
              <Link
                to="/membership"
                className="primary-btn block w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
