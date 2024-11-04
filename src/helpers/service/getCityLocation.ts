import { API_KEY_INJECTION, GET_LOCATION_BY_CITY } from "@/constants/apiUrls";
import useSWR from "swr";
import { getData } from "../getData";

interface CityLocation {
    lat: number;
    lon: number;
    name: string;
}

export function useGetCityLocation(city: string | null): CityLocation | null {

    const fetchUrl = city ? `${GET_LOCATION_BY_CITY}?q=${city}&limit=5${API_KEY_INJECTION}` : null;
    const { data: cityLocation } = useSWR(
        fetchUrl,
        getData<GetLocationByCity[]>
    );

    if (!cityLocation) return null;

    const trCity = cityLocation.find((item) => item.country === "TR");
    if (!trCity) return null;

    return { lat: trCity.lat, lon: trCity.lon, name: trCity.name };
}
