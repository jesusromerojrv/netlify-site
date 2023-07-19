import React, { createContext, useState, useContext } from 'react';

const themeStyles = {
    dark: {
        about: {
            bgc: "#000",
            color: "#fff",
            bgcImg: "#fff",
            bgcButton: "#efb810"
        },
    },
    light: {
            about: {
                bgc: "#000",
                color: "#fff",
                bgcImg: "#fff",
                bgcButton: "#efb810"
            },
    }
}

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };