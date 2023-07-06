const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const expressJSDocSwagger = require('express-jsdoc-swagger')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const swagger = require('./swagger')
const PORT = process.env.PORT || 4000

expressJSDocSwagger(app)(swagger);

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})