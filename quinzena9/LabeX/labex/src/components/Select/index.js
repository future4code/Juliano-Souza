import { useState } from 'react';

import { getCountryURL } from '../../constants/urls'
import { useRequestData } from "../../hooks/useRequestData";

// Styles

import { DropWrapper, Dropdown, DropItem, DropItemSelected } from './style'


export function Select() {

    const [isOpen, setIsOpen] = useState(false)
    const [countryName, setCountryName] = useState('')

    const countries = useRequestData(getCountryURL, 'get')

    const handleDropdown = (item) => {
        setIsOpen(!isOpen)

        
        setCountryName(item)
    }

 
    return (
        <DropWrapper onClick={() => setIsOpen(!isOpen)}>
            <DropItemSelected countryName={countryName}>{countryName ? countryName : 'Insira o país onde mora'}</DropItemSelected>
            <Dropdown handleVisibility={isOpen}>
                {countries?.map((item, i) => 
                <DropItem 
                    key={i} 
                    onClick={() => handleDropdown(item.nome)} 
                    >
                        {item.nome}
                </DropItem>)}
            </Dropdown>
        </DropWrapper>
    )
}