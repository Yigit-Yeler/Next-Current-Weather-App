import { useCity } from "@/customHooks/cityHook";
import useGetStyledComponents from "@/customHooks/getStyledComponents";
import { useThemeContext } from "@/customHooks/themeHook";
import { getInjectLocationText } from "@/helpers/getInjectLocationText";
import { getCurrentWeatherByLocation } from "@/helpers/service/getCurrentWeatherByLocation";
import { Cloud, Compress, Opacity, Thermostat, WindPower } from '@mui/icons-material'; // İkonlar
import { Box, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
function CurrentWeatherInfoCard() {
    const { theme } = useThemeContext();

    const { city, location, currentLocationLoading } = useCity()

    const stringifiedLocation = getInjectLocationText(location?.lat.toString(), location?.lon.toString())

    const { StyledCard, StyledBackgroundBox, IconBox, IconTypography } = useGetStyledComponents();

    const { data, error, isLoading } = getCurrentWeatherByLocation(location?.lat && location?.lon ? stringifiedLocation : undefined)

    if (isLoading || currentLocationLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" >
                <CircularProgress color="success" size={100} />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">Error fetching weather data</Typography>;
    }

    if (!data) {
        return null;
    }

    const { main, weather } = data;
    const celsius = (temp: number) => Math.round(temp - 273.15);

    return (
        <StyledBackgroundBox>
            <StyledCard>
                <CardContent>
                    <Typography data-testid="city" variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {city ? city.name : "Konumunuzdaki Hava"}
                    </Typography>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <CardMedia
                                component="img"
                                sx={{ width: '150px', borderRadius: '50%', boxShadow: `0px 10px 40px ${alpha(theme.palette.secondary.dark, 0.5)}`, color: theme.palette.text.primary }}
                                image={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                                alt={weather[0].description}
                            />
                            <Typography variant="h2" component="div" fontWeight="bold" gutterBottom sx={{ fontSize: '4rem' }}>
                                {celsius(main.temp)}°C
                            </Typography>
                            <Typography variant="h5" sx={{ paddingBottom: theme.spacing(3) }}>
                                {weather[0].main} - {weather[0].description}
                            </Typography>
                            <Typography variant="h6" >
                                Hissedilen: {celsius(main.feels_like)}°C
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} display="flex" justifyContent="space-around" flexWrap="wrap">
                            <IconBox>
                                <Thermostat sx={{ fontSize: 70 }} />
                                <IconTypography>
                                    Min: {celsius(main.temp_min)}°C
                                </IconTypography>
                                <IconTypography>
                                    Max: {celsius(main.temp_max)}°C
                                </IconTypography>
                            </IconBox>

                            <IconBox>
                                <Opacity sx={{ fontSize: 70 }} />
                                <IconTypography>
                                    Nem: {main.humidity}%
                                </IconTypography>
                            </IconBox>

                            <IconBox>
                                <Compress sx={{ fontSize: 70 }} />
                                <IconTypography>
                                    Basınç: {main.pressure} hPa
                                </IconTypography>
                            </IconBox>

                            <IconBox>
                                <WindPower sx={{ fontSize: 70 }} />
                                <IconTypography>
                                    Rüzgar: 12 km/h
                                </IconTypography>
                            </IconBox>

                            <IconBox>
                                <Cloud sx={{ fontSize: 70 }} />
                                <IconTypography>
                                    Bulutluluk: 75%
                                </IconTypography>
                            </IconBox>
                        </Grid>
                    </Grid>

                </CardContent>
            </StyledCard>
        </StyledBackgroundBox>
    );
}

export default CurrentWeatherInfoCard;
