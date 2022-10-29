import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
  log: ['query']
});

interface AdRequestModel {
  gameId: string,
  name: string,
  yearsPlaying: number,
  discord: string,
  weekDays: string,
  hourStart: number,
  hourEnd: number,
  useVoiceChannel: boolean,
}

export const createAd = async(ad: AdRequestModel, gameId: string) => {

  const newAd = await prisma.ad.create({
    data: {
      gameId,
      name: ad.name,
      yearsPlaying: ad.yearsPlaying,
      discord: ad.discord,
      weekDays: ad.weekDays,
      hourStart: ad.hourStart,
      hourEnd: ad.hourEnd,
      useVoiceChannel: ad.useVoiceChannel,
    }
  })

    return { code: 201, message: newAd }
}

export const listAllAds = async(gameId: string) => {
  const allAds = await prisma.ad.findMany({
    select:{
      id: true,
      yearsPlaying: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return { code: 200, message: allAds }
}

export const getDiscordByAd = async(adId: string) => {
  const discord = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })
  return { code: 200, message: discord }
}
