import React from 'react'
import { Switch, Checkbox, Slider } from './style'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'



export function Toggle() {

    const { theme, themeSwitcher } = useContext(ThemeContext)

    console.log(theme)

    return (
        <Switch>
            {theme.id === 1 ? 
            <Checkbox onClick={themeSwitcher} type="checkbox" checked></Checkbox>
            :
            <Checkbox onClick={themeSwitcher} type="checkbox" unchecked></Checkbox>
            }
            <Slider></Slider>
        </Switch>
    )
}