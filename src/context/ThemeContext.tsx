import { createTheme, Theme } from '@mui/material';
import { createContext, ReactNode, useMemo, useState } from 'react';


type ThemeContextValueTypes = {
    theme: Theme
    changeTheme: () => void;
    mode: "dark" | "light"
};

const defaultProvider: ThemeContextValueTypes = {
    changeTheme: () => null,
    theme: createTheme(),
    mode: "dark"

};

const ThemeContext = createContext(defaultProvider);

type Props = {
    children: ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {

    const [mode, setTheme] = useState<"dark" | "light">("dark");
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    primary: {
                        main: mode === 'dark' ? '#1e88e5' : '#1565c0', // Dark modda açık mavi, Light modda koyu mavi
                    },
                    secondary: {
                        main: mode === 'dark' ? '#ff9800' : '#f57c00', // Dark modda açık turuncu, Light modda koyu turuncu
                    },
                    background: {
                        default: mode === 'dark' ? '#121212' : '#fafafa', // Dark modda siyaha yakın gri, Light modda açık gri
                        paper: mode === 'dark' ? '#1f1f1f' : '#ffffff', // Dark modda koyu gri, Light modda beyaz
                    },
                    text: {
                        primary: mode === 'dark' ? '#ffffff' : '#000000', // Metin rengi
                    },
                },
            }),
        [mode],
    );





    const changeTheme = () => {
        setTheme(previousTheme => previousTheme === "dark" ? "light" : "dark")
    }


    const values = {
        changeTheme,
        theme,
        mode
    };

    return <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };

