import express from "express"
import dotenv from "dotenv"
import connectDb from "./config.js"
import cors from "cors"
import userRoutes from "./src/router/user.routes.js"

dotenv.config()
const app = express()

connectDb()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api/auth', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

