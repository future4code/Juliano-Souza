import React from 'react'
import { Switch, Checkbox, Slider } from './style'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'



export function Toggle() {

    const { themeSwitcher } = useContext(ThemeContext)

    return (
        <Switch>
            <Checkbox onClick={themeSwitcher} type="checkbox"></Checkbox>
            <Slider></Slider>
        </Switch>
    )
}