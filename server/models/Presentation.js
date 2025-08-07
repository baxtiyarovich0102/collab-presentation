import mongoose from "mongoose"

const PresentationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slides: {
    type: Array,
    default: [],
  },
  createdBy: {
    type: String, // nickname
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const Presentation = mongoose.model("Presentation", PresentationSchema)
