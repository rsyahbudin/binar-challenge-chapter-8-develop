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
 *       "username": "rafly",
 *       "email": "rafly@gmail.com",
 *       "password": "$2a$10$U8nB3Jni4tBsVPiMEFJHV.fbiXQNMEb5yW2ykLffBp3yJ7hVKfC/e\r\n",
 *       "experience": 0,
 *       "lvl": 0,
 *       "createdAt": "2023-07-05T17:00:00.000Z",
 *       "updatedAt": "2023-07-05T17:00:00.000Z"
 *     }
 *   ]
 * }
 */
playerRouter.get("/", PlayerController.getPlayers);
playerRouter.post("/", PlayerController.createPlayer);
playerRouter.get("/:id", PlayerController.getPlayerById);
playerRouter.put("/:id", PlayerController.updatePlayer);
playerRouter.delete("/:id", PlayerController.deletePlayer);
playerRouter.post("/exp/:id", PlayerController.updateExperience);

module.exports = playerRouter;
