import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// enable CORS - Cross Origin Resource Sharing
app.use(
    cors({
      credentials: true,
      origin: true,
    })
  );

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', postRoutes)

export default app