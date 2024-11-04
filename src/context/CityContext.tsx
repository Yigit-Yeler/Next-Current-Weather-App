import { useGetCityLocation } from '@/helpers/service/getCityLocation';
import useCurrentLocation from '@/helpers/service/getCurrentLocationForDefaultCity';
import { createContext, ReactNode, useEffect, useState } from 'react';

type City = {
    id: number;
    name: string;
};

type Location = {
    lat: number;
    lon: number;
}

type CityContextValuesType = {
    city: City | null;
    location: Location | null;
    setCity: (value: City | null) => void;
    currentLocationLoading: boolean;
};

const defaultProvider: CityContextValuesType = {
    city: null,
    location: null,
    setCity: () => null,
    currentLocationLoading: true
};

const CityContext = createContext(defaultProvider);

type Props = {
    children: ReactNode;
};

const CityProvider = ({ children }: Props) => {
    const { currentLat, currentLon, currentLocationLoading } = useCurrentLocation();
    const [city, setCity] = useState<City | null>(defaultProvider.city);
    const [location, setLocation] = useState<Location | null>(defaultProvider.location);

    const cityLocation = useGetCityLocation(city?.name as string);

    useEffect(() => {
        if (cityLocation) {
            setLocation(cityLocation);
        }
        if (!city && currentLat && currentLon) {
            setLocation({ lat: currentLat, lon: currentLon });
        }
    }, [city, cityLocation, currentLat]);



    const values = {
        city,
        location,
        setCity,
        currentLocationLoading
    };

    return <CityContext.Provider value={values}> {children} </CityContext.Provider>;
};

export { CityContext, CityProvider };

