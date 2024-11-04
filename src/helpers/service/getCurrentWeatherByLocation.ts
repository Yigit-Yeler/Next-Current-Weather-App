import { API_KEY_INJECTION, GET_CURRENT_WEATHER_BY_LOCATION } from "@/constants/apiUrls";
import useSWR from "swr";
import { getData } from "../getData";

export function getCurrentWeatherByLocation(location?: string) {
    const { data, error, isLoading } = useSWR(
        location ? `${GET_CURRENT_WEATHER_BY_LOCATION}${location}${API_KEY_INJECTION}` : null,
        getData<CurrentWeatherByCityResponse>
    );

    return { data, error, isLoading }
}