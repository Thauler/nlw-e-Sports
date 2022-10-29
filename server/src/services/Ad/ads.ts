import adModel from "../../model/Ad";
import convertStringHourToMinutes from "../../utils/convert-string-hour-to-minutes";

export interface AdRequest {
  gameId: string,
  name: string,
  yearsPlaying: number,
  discord: string,
  weekDays: number[],
  hourStart: string,
  hourEnd: string,
  useVoiceChannel: boolean,
}

export const createAd = async(ad: AdRequest, gameId: string) => {

  const {code, message} = await adModel.createAd({
    ...ad,
    weekDays: ad.weekDays.join(','),
    hourStart: convertStringHourToMinutes(ad.hourStart),
    hourEnd: convertStringHourToMinutes(ad.hourEnd),
  }, gameId)

    return { code, message: {...message, weekDays: message.weekDays.split(',') } }
}

export const listAllAds = async(gameId: string) => {
  const {code, message} = await adModel.listAllAds(gameId);

  return {
    code,
    message: message
    .map((ad) => ({...ad, weekDays: ad.weekDays.split(',') }))
  };
}

export const getDiscordByAd = async(adId: string) => {
  const {code, message} = await adModel.getDiscordByAd(adId);

  return { code, message }
}