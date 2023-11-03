import StudentRoute from './routes/StudentRoute.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())

app.use('/student', StudentRoute)

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})