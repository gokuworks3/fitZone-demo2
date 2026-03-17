import mongoose from 'mongoose'

const membershipSchema = new mongoose.Schema(
  {
    fullName: {
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
    plan: {
      type: String,
      required: true,
      enum: ['Monthly', 'Quarterly', 'Yearly'],
    },
  },
  {
    timestamps: true,
  },
)

const Membership = mongoose.model('Membership', membershipSchema)

export default Membership
