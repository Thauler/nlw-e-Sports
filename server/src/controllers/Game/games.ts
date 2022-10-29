import { Request, Response } from "express";

import gameService from "../../model/Game";
import { GameRequest } from "../../model/Game/games";

export const listAllGames = async (_request: Request, response: Response) => {
  const { code, message } = await gameService.listAllGames();

  return response.status(code).json(message);
}

export interface RequestWithBody<T> extends Request {
  body: T;
}

export const createGame = async (request: RequestWithBody<GameRequest>, response: Response) => {
  try {
    const { code, message } = await gameService.createGame(request.body);
    return response.status(code).json(message);
  } catch (error: unknown) {
    console.log(error);
    return response.status(500).json({ message: "Internal Server Error"});
  }
}
