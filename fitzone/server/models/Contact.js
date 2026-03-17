import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 180,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1500,
    },
  },
  {
    timestamps: true,
  },
)

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
