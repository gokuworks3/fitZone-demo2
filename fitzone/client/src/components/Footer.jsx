import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { navLinks } from '../data/siteData'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,46,0.12),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-3xl font-bold uppercase text-brand-light">FitZone</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-muted">
            FitZone is built for people who want elite coaching, premium equipment, and a motivating community under one roof.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-brand-muted transition hover:text-brand-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
            Follow Us
          </h4>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 p-2 text-brand-muted transition hover:border-brand-red/60 hover:text-brand-light"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.15em] text-brand-muted">
        Copyright {year} FitZone. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
