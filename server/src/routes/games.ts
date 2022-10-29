import { Router } from "express";
import adsController from "../controllers/Ad";
import gamesController from "../controllers/Game";


const gamesRoute = Router()

// Get all games
gamesRoute.get('/', gamesController.listAllGames);

// Create a new game
gamesRoute.post('/', gamesController.createGame);

// Get all ads from a specific game
gamesRoute.get('/:gameId/ads', adsController.listAllAds);

// Create a new ad
gamesRoute.post('/:gameId/ads', adsController.createAd);

export default gamesRoute;