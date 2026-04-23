import React, { createContext, useState } from 'react';
import THEME from '../constants/theme.js';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeMode, setThemeMode] = useState('light');
    const theme = THEME[themeMode];

    return (
        <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
