import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import { pricingPlans } from '../data/siteData'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  plan: 'Quarterly',
}

const steps = [
  { num: '01', title: 'Submit Details', text: 'Fill the form and our advisor will reach out within 24 hours.' },
  { num: '02', title: 'Fitness Assessment', text: 'Baseline fitness check and personalized goal mapping session.' },
  { num: '03', title: 'Start Training', text: 'Get matched with a coach and begin your first-week training plan.' },
]

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
      const response = await fetch(`${API_BASE_URL}/api/membership`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.message || 'Failed to submit membership form.')
      }

      setStatus({
        type: 'success',
        message:
          payload.message || 'Membership request submitted. We will contact you soon.',
      })
      setFormState(initialState)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to submit membership request right now.',
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
            className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm sm:p-8"
          >
            <h3 className="font-heading text-3xl uppercase text-brand-light sm:text-4xl">Start Your Journey</h3>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Submit your details and our membership advisor will contact you with onboarding details and your first assessment schedule.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <Motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 font-heading text-lg text-brand-red">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-heading text-lg uppercase text-brand-light">{step.title}</p>
                    <p className="mt-1 text-sm text-brand-muted">{step.text}</p>
                  </div>
                </Motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-brand-red/20 bg-brand-red/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-red" />
                <p className="text-sm text-brand-muted">
                  <span className="font-semibold text-brand-light">Free trial available</span> &mdash; Try your first session with no commitment.
                </p>
              </div>
            </div>
          </Motion.div>

          <Motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm sm:p-8"
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
                placeholder="Enter your full name"
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
                placeholder="you@example.com"
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
                placeholder="+1 (555) 000-0000"
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
              {isSubmitting ? 'Submitting...' : (
                <>
                  Get Started <ArrowRight size={16} />
                </>
              )}
            </button>
          </Motion.form>
        </div>
      </section>
    </PageTransition>
  )
}

export default Membership
