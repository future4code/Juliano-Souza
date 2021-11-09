import { useState, useContext } from 'react';

import { getCountryURL } from '../../constants/urls'
import { useRequestData } from "../../hooks/useRequestData";
import { PublicContext } from '../../contexts/PublicContext';

// Styles

import { DropWrapper, Dropdown, DropItem, DropItemSelected } from './style'


export function Select() {

    const { formValues, setFormValues } = useContext(PublicContext)

    const [isOpen, setIsOpen] = useState(false)

    const countries = useRequestData(getCountryURL, 'get')

    const handleDropdown = (item) => {

        if (isOpen) {
            setFormValues({...formValues, country: item})
        }

        setIsOpen(!isOpen)

    }
 
    return (
        <DropWrapper onClick={() => setIsOpen(!isOpen)}>
            <DropItemSelected countryName={formValues.country}>{formValues.country ? formValues.country : 'Insira o país onde mora'}</DropItemSelected>
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