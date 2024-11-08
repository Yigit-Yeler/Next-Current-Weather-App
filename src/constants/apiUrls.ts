const BASE_URL_DATA = process.env.NEXT_PUBLIC_WEATHER_BASE_URL + 'data/'
const BASE_URL_GEO = process.env.NEXT_PUBLIC_WEATHER_BASE_URL + 'geo/'

const API_VERSION_FOR_CURRENT_WEATHER = "2.5"
const API_VERSION_FOR_TIMESTAMP_WEATHER = "3.0"
const API_VERSION_FOR_GEO = "1.0"

export const API_KEY_INJECTION = "&appid=" + process.env.NEXT_PUBLIC_API_KEY
export const DAILY_INJECTION = "&exclude=daily"

export const GET_CURRENT_WEATHER_BY_LOCATION = BASE_URL_DATA + API_VERSION_FOR_CURRENT_WEATHER + "/weather"
export const GET_DAILY_WEATHER_BY_LOCATION = BASE_URL_DATA + API_VERSION_FOR_TIMESTAMP_WEATHER + "/onecall"

export const GET_LOCATION_BY_CITY = BASE_URL_GEO + API_VERSION_FOR_GEO + "/direct"
