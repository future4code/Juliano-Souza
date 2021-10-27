import { AiOutlineReload } from "react-icons/ai"
import { Footer, Reload } from './style'
import { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'

export function FooterReloadButton() {

    const { handleClear } = useContext(ProfileContext)

    return (
        <Footer>
            <Reload>
                <AiOutlineReload onClick={handleClear}/>
            </Reload>
        </Footer>
    )
}