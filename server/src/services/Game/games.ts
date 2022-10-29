import { GameRequest } from "../../model/Game/games";
import gameModel from "../../model/Game";

export const createGame = async(game: GameRequest) => {
  const { code, message } = await gameModel.createGame(game);

    return { code, message };
}

export const listAllGames = async() => {
  const { code, message } = await gameModel.listAllGames();

  return { code, message };
}