import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import { Github } from './config/auth.js'
import AuthRoute from './routes/AuthRoute.js'
import StudentRoute from './routes/StudentRoute.js'
import GroupRoute from './routes/GroupRoute.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false
}))

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(Github)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

app.use('/auth', AuthRoute)
app.use('/student', StudentRoute)
app.use('/group', GroupRoute)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})