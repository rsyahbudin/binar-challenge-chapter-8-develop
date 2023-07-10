const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

/**
 * Response
 * @typedef {object} Response
 * @property {string} result - The title
 * @property {array<Player>} data - The content
 */

/**
 * ResponseSingle
 * @typedef {object} ResponseSingle
 * @property {string} result - The title
 * @property {Player} data - The content
 */

/**
 * ResponseWithMessage
 * @typedef {object} ResponseWithMessage
 * @property {string} result - The title
 * @property {string} message - The response message
 */

/**
 * GET /players
 * @summary List all players
 * @description Listing all players from the database
 * @tags Player
 * @operationId listPlayers
 * @return {Response} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "data": [
 *     {
 *       "id": 1,
 *       "username": "galileo",
 *       "email": "galileo@brazil.com",
 *       "password": "$2a$10$Q.uMt79272XWj2DmFBgGEuevlRMM4oEPjmFL122nacdqwKMt5hA1u\n",
 *       "experience": 0,
 *       "lvl": 0,
 *       "createdAt": "2023-06-25T17:00:00.000Z",
 *       "updatedAt": "2023-06-25T17:00:00.000Z"
 *     }
 *   ]
 * }
 */
playerRouter.get("/", PlayerController.getPlayers);
/**
 * POST /players
 * @summary Create new player
 * @description Creates a new player and insert it into the database
 * @tags Player
 * @operationId createPlayer
 * @param {CreateOrUpdatePlayer} request.body.required - new player data
 * @return {ResponseSingle} 201 - success response
 * @return {object} 400 - failed response
 * @example response - 201 - example success response
 * {
 *   "result": "Success",
 *   "data": {
 *     "id": 1,
 *     "username": "galileo",
 *     "email": "galileo@brazil.com",
 *     "password": "$2a$10$Q.uMt79272XWj2DmFBgGEuevlRMM4oEPjmFL122nacdqwKMt5hA1u\n",
 *     "experience": 0,
 *     "lvl": 0,
 *     "createdAt": "2023-06-25T17:00:00.000Z",
 *     "updatedAt": "2023-06-25T17:00:00.000Z"
 *   }
 * }
 */
playerRouter.post("/", PlayerController.createPlayer);
/**
 * GET /players/{id}
 * @summary Get player by id
 * @description To get player detail by its id
 * @tags Player
 * @operationId getPlayerById
 * @param {number} id.path - player id
 * @return {ResponseSingle} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "data": {
 *     "id": 1,
 *     "username": "galileo",
 *     "email": "galileo@brazil.com",
 *     "password": "$2a$10$Q.uMt79272XWj2DmFBgGEuevlRMM4oEPjmFL122nacdqwKMt5hA1u\n",
 *     "experience": 0,
 *     "lvl": 0,
 *     "createdAt": "2023-06-25T17:00:00.000Z",
 *     "updatedAt": "2023-06-25T17:00:00.000Z"
 *   }
 * }
 */
playerRouter.get("/:id", PlayerController.getPlayerById);
/**
 * PUT /players/{id}
 * @summary Update player by id
 * @description To update player data by its id
 * @tags Player
 * @operationId putPlayerById
 * @param {number} id.path - player id
 * @param {CreateOrUpdatePlayer} request.body.required - update player data
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data updated"
 *   }
 */
playerRouter.put("/:id", PlayerController.updatePlayer);
/**
 * DELETE /players/{id}
 * @summary Delete player by id
 * @description To delete player data by its id
 * @tags Player
 * @operationId deletePlayerById
 * @param {number} id.path - player id
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data deleted "
 *   }
 */
playerRouter.delete("/:id", PlayerController.deletePlayer);
/**
 * POST /players/exp/{id}
 * @summary Update player experience by id
 * @description To update player experience by its id
 * @tags Player
 * @operationId postPlayerById
 * @param {number} id.path - player id
 * @param {UpdatePlayerExperience} request.body.required - update player experience  data
 * @return {ResponseWithMessage} 200 - success response
 * @return {object} 400 - failed response
 * @example response - 200 - example success response
 * {
 *   "result": "Success",
 *   "message" : "Player data updated"
 *   }
 */
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;