import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query']
});

export interface GameRequest {
  title: string,
  bannerUrl: string
}

export const createGame = async(game: GameRequest) => {
  const newGame = await prisma.game.create({
    data: game
  });

    return { code: 201, message: newGame };
}

export const listAllGames = async() => {
  const allGames = await prisma.game.findMany({
    include: {
      _count: {
        select:{
          ads: true
        }
      }
    }
  });

  return { code: 200, message: allGames };
}
