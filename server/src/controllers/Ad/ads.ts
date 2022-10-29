import { AdRequest } from "../../services/Ad/ads";
import adService from "../../services/Ad"
import { Request, Response } from "express";

export const createAd = async(request: Request, response: Response) => {
  const body = request.body;
  const { gameId } = request.params;
  const {code, message} = await adService.createAd(body, gameId);

  return response.status(code).json(message);
}

export const listAllAds = async(request: Request, response: Response) => {
  const { gameId } = request.params;
  const {code, message} = await adService.listAllAds(gameId);

  return response.status(code).json(message);
}

export const getDiscordByAd = async(request: Request, response: Response) => {
  const { id } = request.params;

  const {code, message} = await adService.getDiscordByAd(id);

  return response.status(code).json(message);
}