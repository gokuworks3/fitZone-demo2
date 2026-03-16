import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import { pricingPlans } from '../data/siteData'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  plan: 'Quarterly',
}

const saveMembershipLead = (payload) => {
  const currentEntries = JSON.parse(
    window.localStorage.getItem('fitzoneMembershipLeads') || '[]',
  )

  const updatedEntries = [
    ...currentEntries,
    {
      ...payload,
      submittedAt: new Date().toISOString(),
    },
  ]

  window.localStorage.setItem(
    'fitzoneMembershipLeads',
    JSON.stringify(updatedEntries),
  )
}

const Membership = () => {
  const [formState, setFormState] = useState(initialState)
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
      await new Promise((resolve) => {
        setTimeout(resolve, 450)
      })

      saveMembershipLead(formState)
      setStatus({
        type: 'success',
        message: 'Request saved in demo mode. Our team will contact you soon.',
      })
      setFormState(initialState)
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to save your request in this browser session.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <section className="page-top-space section-wrapper">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your Plan"
          description="Flexible plans built for every schedule and transformation goal."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-black/45 p-6 sm:p-8"
          >
            <h3 className="font-heading text-3xl uppercase text-brand-light sm:text-4xl">Start Your Journey</h3>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Submit your details and our membership advisor will contact you with onboarding details and your first assessment schedule.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-muted">
              <li>1. Personalized onboarding call within 24 hours</li>
              <li>2. Fitness baseline check and goal mapping</li>
              <li>3. Coach assignment and first-week plan</li>
            </ul>
          </Motion.div>

          <Motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-black/45 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formState.fullName}
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
              <label htmlFor="plan" className="form-label">
                Select Plan
              </label>
              <select
                id="plan"
                name="plan"
                value={formState.plan}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
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
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </button>

            <p className="text-center text-xs uppercase tracking-[0.1em] text-brand-muted">
              Demo Mode: submissions are saved locally in your browser.
            </p>
          </Motion.form>
        </div>
      </section>
    </PageTransition>
  )
}

export default Membership
