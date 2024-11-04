import { GET_CURRENT_WEATHER_BY_LOCATION, GET_LOCATION_BY_CITY } from '@/constants/apiUrls';
import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get(GET_LOCATION_BY_CITY, async ({ params }) => {
        const { q } = params;

        if (q === 'Eskişehir') {
            return HttpResponse.json([
                { country: "TR", name: "Eskişehir", lat: 39.7767, lon: 30.5206 }
            ]);
        } else if (q === 'Ankara') {
            return HttpResponse.json([
                { country: "TR", name: "Ankara", lat: 39.9334, lon: 32.8597 }
            ]);
        } else {
            return HttpResponse.json([]);
        }
    }),

    http.get(GET_CURRENT_WEATHER_BY_LOCATION, async ({ params }) => {
        const { lat, lon } = params;

        if (lat === '39.7767' && lon === '30.5206') {
            return HttpResponse.json({
                main: { temp: 298, feels_like: 297, temp_min: 296, temp_max: 300, pressure: 1010, humidity: 70 },
                weather: [{ id: 800, main: "Clouds", description: "few clouds", icon: "02d" }]
            });
        } else if (lat === '39.9334' && lon === '32.8597') {
            return HttpResponse.json({
                main: { temp: 295, feels_like: 294, temp_min: 293, temp_max: 298, pressure: 1015, humidity: 80 },
                weather: [{ id: 500, main: "Clear", description: "clear sky", icon: "01d" }]
            });
        } else {
            return HttpResponse.json({
                main: { temp: 300, feels_like: 299, temp_min: 295, temp_max: 305, pressure: 1013, humidity: 75 },
                weather: [{ id: 801, main: "Mist", description: "misty", icon: "03d" }]
            });
        }
    })
]