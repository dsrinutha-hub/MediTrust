import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// App configuration
const app = express()
const port = process.env.PORT || 4000

// Initialize Database & Cloudinary connections
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API Endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

// Root health check endpoint
app.get("/", (req, res) => {
  res.send("API is working successfully 🚀")
});

// Global Error Handling Middleware (Catches unhandled errors gracefully)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: "Internal Server Error" })
})

// Start Server
app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`)
})