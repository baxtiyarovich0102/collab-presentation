import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import presentationRoutes from "./routes/presentationRoutes.js"

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
  },
})

app.use(cors())
app.use(express.json())
app.use("/api/presentations", presentationRoutes)

app.get("/", (req, res) => {
  res.send("Collaborative Presentation Backend")
})

// 👇 Slide'lar xotirada saqlanadi (real-time update uchun)
const presentationsMap = {} // memory cache for simplicity

// ✅ WebSocket connection faqat 1 marta bo'lishi kerak
io.on("connection", (socket) => {
  console.log("User connected:", socket.id)

  // User taqdimotga qo'shilyapti
  socket.on("join_presentation", (presentationId) => {
    socket.join(presentationId)
    console.log(`${socket.id} joined presentation ${presentationId}`)

    // Agar xotirada slide bo‘lsa, jo‘natamiz
    const slides = presentationsMap[presentationId]
    if (slides) {
      socket.emit("slide_updated", slides)
    }
  })

  // Taqdimotdan chiqyapti
  socket.on("leave_presentation", (presentationId) => {
    socket.leave(presentationId)
    console.log(`${socket.id} left presentation ${presentationId}`)
  })

  // Slideni o‘zgartirdi
  socket.on("update_slide", ({ presentationId, slides }) => {
    presentationsMap[presentationId] = slides
    socket.to(presentationId).emit("slide_updated", slides)
  })

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id)
  })
})

// MongoDB ulanish va serverni ishga tushurish
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => console.log(err))
