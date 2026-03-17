import { Router } from 'express'
import Contact from '../models/Contact.js'

const router = Router()

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' })
    }

    await Contact.create({ name, email, phone, message })

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully. We will contact you shortly.',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to submit contact request.',
      error: error.message,
    })
  }
})

export default router
