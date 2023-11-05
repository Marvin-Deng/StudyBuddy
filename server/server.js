import StudentRoute from './routes/StudentRoute.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import { Github } from './config/auth.js'
import authRoutes from './routes/AuthRoute.js'

dotenv.config()

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false
}))

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}))

app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

passport.use(Github)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/', (req, res) => {
    res.redirect('https://localhost:5173')
})

app.use('./auth', authRoutes)
app.use('/student', StudentRoute)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})