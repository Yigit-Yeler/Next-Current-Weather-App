import { useEffect, useState } from 'react';

function useCurrentLocation() {
    const [location, setLocation] = useState<{ currentLat: number | null, currentLon: number | null }>({
        currentLat: null,
        currentLon: null,
    });

    const [currentLocationLoading, setCurrentLocationLoading] = useState<boolean>(true)

    useEffect(() => {
        if (typeof window !== 'undefined' && 'geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        currentLat: position.coords.latitude,
                        currentLon: position.coords.longitude,
                    });
                    setCurrentLocationLoading(false)
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setLocation({ currentLat: null, currentLon: null });
                    setCurrentLocationLoading(false)

                }
            );
        }
    }, []);

    return { ...location, currentLocationLoading };
}

export default useCurrentLocation;
