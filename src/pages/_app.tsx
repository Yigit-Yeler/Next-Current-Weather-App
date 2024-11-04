import { CityProvider } from '@/context/CityContext';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { useThemeContext } from '@/customHooks/themeHook';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeContext()



  return (
    <CityProvider>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContextProvider>
    </CityProvider>

  );
}
