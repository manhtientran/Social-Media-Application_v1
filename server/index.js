import config from "./config/config.js"
import app from './express.js'
import mongoose from 'mongoose'

// Connection URL
// mongoose.Promise = global.Promise

mongoose.connect(config.mongoUri)
.then(() => console.log(`Connect successfully to MongoDB at ${config.mongoUri}`))
.catch((err) => {console.log(err)})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server is running on port %s.', config.port)
})