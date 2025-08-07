import express from "express"
import { Presentation } from "../models/Presentation.js"

const router = express.Router()

// POST /presentations
router.post("/", async (req, res) => {
  const { title, nickname } = req.body
  try {
    const newPres = await Presentation.create({
      title,
      createdBy: nickname,
      slides: [{ id: Date.now(), elements: [] }]
    })
    res.status(201).json(newPres)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /presentations
router.get("/", async (req, res) => {
  const list = await Presentation.find({}, "_id title")
  res.json(list)
})

export default router
