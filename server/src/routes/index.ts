import { Router } from "express";
import adsRoute from "./ads";
import gamesRoute from "./games";

const routes = Router();

// routes.use('/login');

routes.use('/games', gamesRoute);

routes.use('/ads', adsRoute);

export default routes;