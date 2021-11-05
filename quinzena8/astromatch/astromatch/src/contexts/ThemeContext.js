import { useState, createContext } from 'react'
import { themeDark } from '../constants/themeDark'
import { themeLight } from '../constants/themeLight'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext()

export function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState(themeDark)

    const themeSwitcher = () => {
        setTheme(theme === themeDark ? themeLight : themeDark)

    }

    return (
        <ThemeContext.Provider value={{theme, themeSwitcher}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )

}