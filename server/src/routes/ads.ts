import { Router } from "express";
import adsController from "../controllers/Ad";

const adsRoute = Router()

// Get a discord from a specific ad
adsRoute.get('/:id/discord', adsController.getDiscordByAd);


export default adsRoute;