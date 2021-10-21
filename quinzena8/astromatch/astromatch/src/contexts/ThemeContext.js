import { useState, createContext } from 'react'
import { themeDark } from '../constants/themeDark'
import { themeLight } from '../constants/themeLight'

export const ThemeContext = createContext()

export function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState(themeDark)

    const themeSwitcher = () => {
    setTheme(theme === themeDark ? themeLight : themeDark)

    }

    return (
        <ThemeContext.Provider value={{theme, themeSwitcher}}>
            {children}
        </ThemeContext.Provider>
    )

}