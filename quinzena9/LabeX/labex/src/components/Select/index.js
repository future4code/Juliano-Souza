import { useContext, useState } from 'react';
import { PublicContext } from '../../contexts/PublicContext';

// Styles

import { DropWrapper, Dropdown, DropItem, DropItemSelected } from './style'


export function Select({ state, stateFunc, stateKey, placeholderText, arrItems, reqKeyName }) {


    const [isOpen, setIsOpen] = useState(false)

    const { tripName, setTripName, setTripId } = useContext(PublicContext)

    const handleDropdown = (item) => {

        if (state) {
            stateFunc({...state, [stateKey]: item[reqKeyName]})
        } else {
            setTripName(item[reqKeyName])
            setTripId(item.id)
        }
      
        setIsOpen(!isOpen)
    }
 

    return (
        <DropWrapper onClick={() => setIsOpen(!isOpen)}>
            {state ? <DropItemSelected itemName={state[stateKey]}>{state[stateKey] ? state[stateKey] : `${placeholderText}`}</DropItemSelected> : <DropItemSelected itemName={tripName}>{tripName ? tripName : placeholderText}</DropItemSelected>}
            <Dropdown handleVisibility={isOpen}>
                {arrItems?.map((item, i) => 
                <DropItem 
                    key={i} 
                    onClick={() => handleDropdown(item)} 
                    >
                        {item[reqKeyName]}
                </DropItem>)}
            </Dropdown>
        </DropWrapper>
    )
}