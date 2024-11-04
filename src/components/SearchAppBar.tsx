import { options } from '@/constants/cityOptions';
import { useCity } from '@/customHooks/cityHook';
import { useThemeContext } from '@/customHooks/themeHook';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function SearchAppBar() {
    const { city, setCity } = useCity()
    const { changeTheme, mode, theme } = useThemeContext()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ py: 1, backgroundColor: theme.palette.primary.main }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Weather App
                    </Typography>
                    <Autocomplete
                        disablePortal
                        data-testid="city-input"
                        value={city}
                        onChange={(event, newValue) => {
                            if (newValue) setCity(newValue);
                        }}
                        options={options}
                        getOptionLabel={(option) => option.name || ""}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Şehir" value={city?.name || ""} />}
                    />

                    <IconButton onClick={changeTheme} color="inherit">
                        {mode == "dark" ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
