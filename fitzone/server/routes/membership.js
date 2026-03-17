import { Router } from 'express'
import Membership from '../models/Membership.js'

const router = Router()

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, plan } = req.body

    if (!fullName || !email || !phone || !plan) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' })
    }

    if (!['Monthly', 'Quarterly', 'Yearly'].includes(plan)) {
      return res.status(400).json({
        message: 'Plan must be one of: Monthly, Quarterly, Yearly.',
      })
    }

    await Membership.create({ fullName, email, phone, plan })

    return res.status(201).json({
      success: true,
      message: 'Membership request submitted successfully.',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to submit membership request.',
      error: error.message,
    })
  }
})

export default router
