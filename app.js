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

/**
 * Player
 * @typedef {object} Player
 * @property {number} id - ID
 * @property {string} username - Player's username
 * @property {string} email - Player's email
 * @property {string} password - Player's password
 * @property {number} experience - Player's exp
 * @property {number} lvl - Player's level
 * @property {string} createdAt - Player's date creation
 * @property {string} updatedAt - Player's date updation
 */

/**
 * CreateOrUpdatePlayer
 * @typedef {object} CreateOrUpdatePlayer
 * @property {string} username - Player's username
 * @property {string} email - Player's email
 * @property {string} password - Player's password
 * @property {number} experience - Player's exp
 */

/**
 * UpdatePlayerExperience
 * @typedef {object} UpdatePlayerExperience
 * @property {number} exp - new experience value for particular player
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})