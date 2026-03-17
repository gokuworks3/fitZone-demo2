import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import membershipRoutes from './routes/membership.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*',
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)
app.use('/api/membership', membershipRoutes)

app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` })
})

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is missing. Add it to your .env file.')
    }

    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')

    app.listen(PORT, () => {
      console.log(`FitZone server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server startup failed:', error.message)
    process.exit(1)
  }
}

startServer()
