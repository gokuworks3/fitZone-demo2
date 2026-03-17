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
    `text-xs font-semibold uppercase tracking-[0.14em] transition ${
      isActive ? 'text-brand-light' : 'text-brand-muted hover:text-brand-light'
    }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-b border-white/10 bg-black/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="inline-block h-9 w-2 rounded-full bg-brand-red" />
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
              {link.label}
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
          className="rounded-md border border-white/15 p-2 text-brand-light lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <Motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-black/95 px-4 pb-5 pt-4 lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.1em] ${
                      isActive
                        ? 'bg-brand-red/20 text-brand-light'
                        : 'text-brand-muted hover:bg-white/5 hover:text-brand-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/membership"
              className="primary-btn mt-5 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
