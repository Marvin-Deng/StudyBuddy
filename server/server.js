import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import StudentRoute from './routes/StudentRoute.js'
import GroupRoute from './routes/GroupRoute.js'
import ClassRoute from './routes/ClassRoute.js'
dotenv.config()

const app = express()
app.use(express.json())

app.use(cors({
    origin: process.env.APP_URL || 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}))

app.use('/student', StudentRoute)
app.use('/group', GroupRoute)
app.use('/class', ClassRoute)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})