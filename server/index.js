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

// WebSocket connections
io.on("connection", (socket) => {
  console.log("User connected:", socket.id)
  
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id)
  })
})


const presentationsMap = {} // memory cache for simplicity

io.on("connection", (socket) => {
  console.log("User connected:", socket.id)

  socket.on("join_presentation", (presentationId) => {
    socket.join(presentationId)
    console.log(`${socket.id} joined ${presentationId}`)
  })

  socket.on("leave_presentation", (presentationId) => {
    socket.leave(presentationId)
  })

  socket.on("update_slide", ({ presentationId, slides }) => {
    // save to memory (and optionally DB)
    presentationsMap[presentationId] = slides

    // broadcast to all others
    socket.to(presentationId).emit("slide_updated", slides)
  })
})



const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => console.log(err))
