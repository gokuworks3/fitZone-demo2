import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, contactDetails } from '../data/siteData'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,46,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="inline-block h-8 w-2 rounded-full bg-brand-red" />
              <h3 className="font-heading text-3xl font-bold uppercase text-brand-light">FitZone</h3>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-muted">
              Elite coaching, premium equipment, and a motivating community under one roof. Your transformation starts here.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 p-2.5 text-brand-muted transition-all duration-300 hover:border-brand-red/60 hover:bg-brand-red/10 hover:text-brand-light"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
              <span className="inline-block h-[2px] w-4 bg-brand-red" />
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-brand-muted transition-colors duration-300 hover:text-brand-light"
                  >
                    <ArrowRight size={12} className="text-brand-red/0 transition-all duration-300 group-hover:text-brand-red" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
              <span className="inline-block h-[2px] w-4 bg-brand-red" />
              Contact
            </h4>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-muted">
                <Phone size={15} className="mt-0.5 shrink-0 text-brand-red" />
                {contactDetails.phone}
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-muted">
                <Mail size={15} className="mt-0.5 shrink-0 text-brand-red" />
                {contactDetails.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-muted">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-red" />
                {contactDetails.address}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-light">
              <span className="inline-block h-[2px] w-4 bg-brand-red" />
              Newsletter
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-brand-muted">
              Get weekly training tips and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-white/15 bg-black/50 px-4 py-2.5 text-sm text-brand-light placeholder:text-brand-muted/50 transition-all focus:border-brand-red/50 focus:outline-none"
              />
              <button type="submit" className="rounded-lg bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-redDark hover:shadow-lg hover:shadow-brand-red/25">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs uppercase tracking-[0.15em] text-brand-muted sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {year} FitZone. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-brand-light">Privacy Policy</span>
            <span className="cursor-pointer transition-colors hover:text-brand-light">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
