import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
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

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-black/45 p-6 sm:p-8"
          >
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
                className="form-input"
                required
              />
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
                className="form-input resize-none"
                required
              />
            </div>

            {status.message ? (
              <p
                className={`rounded-lg px-3 py-2 text-sm ${
                  status.type === 'success'
                    ? 'border border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                    : 'border border-red-500/50 bg-red-500/10 text-red-300'
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button type="submit" disabled={isSubmitting} className="primary-btn w-full disabled:opacity-70">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </Motion.form>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/10 bg-black/45 p-6 sm:p-8">
              <h3 className="font-heading text-2xl uppercase text-brand-light sm:text-3xl">Contact Information</h3>
              <ul className="mt-6 space-y-4 text-sm text-brand-muted">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-brand-red" />
                  <span>{contactDetails.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-brand-red" />
                  <span>{contactDetails.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-brand-red" />
                  <span>{contactDetails.address}</span>
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
