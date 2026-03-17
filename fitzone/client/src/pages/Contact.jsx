import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import { contactDetails } from '../data/siteData'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const initialContactForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const Contact = () => {
  const [formState, setFormState] = useState(initialContactForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.message || 'Failed to submit contact form.')
      }

      setStatus({
        type: 'success',
        message: payload.message || 'Message received. We will contact you shortly.',
      })
      setFormState(initialContactForm)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Contact"
          title="Let Us Build Your Plan"
          description="Tell us your goals and our team will help you start strong with the right training path."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="form-input"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your fitness goals..."
                className="form-input resize-none"
                required
              />
            </div>

            {status.message ? (
              <p
                className={`rounded-lg px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                    : 'border border-red-500/50 bg-red-500/10 text-red-300'
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="primary-btn inline-flex w-full items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </Motion.form>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-2xl uppercase text-brand-light sm:text-3xl">Contact Information</h3>
              <p className="mt-2 text-sm text-brand-muted">Reach out anytime. We typically respond within 24 hours.</p>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-brand-red/10 p-2.5">
                    <Phone size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Phone</p>
                    <p className="mt-1 text-sm text-brand-light">{contactDetails.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-brand-red/10 p-2.5">
                    <Mail size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Email</p>
                    <p className="mt-1 text-sm text-brand-light">{contactDetails.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-brand-red/10 p-2.5">
                    <MapPin size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Address</p>
                    <p className="mt-1 text-sm text-brand-light">{contactDetails.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-brand-red/10 p-2.5">
                    <Clock size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Working Hours</p>
                    <p className="mt-1 text-sm text-brand-light">Mon - Fri: 5:00 AM - 11:00 PM</p>
                    <p className="text-sm text-brand-muted">Sat - Sun: 6:00 AM - 9:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="FitZone Location"
                src="https://www.google.com/maps?q=Downtown+New+York&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
