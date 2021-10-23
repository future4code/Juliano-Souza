import React from 'react'
import { Switch, Checkbox, Slider } from './style'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'



export function Toggle() {

    const { theme, themeSwitcher } = useContext(ThemeContext)

    return (
        <Switch>
            <Checkbox onClick={themeSwitcher} type="checkbox" defaultChecked={theme.id === 1 ? true : false}></Checkbox>
            <Slider></Slider>
        </Switch>
    )
}