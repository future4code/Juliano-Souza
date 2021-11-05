import { useContext } from 'react'
import { ProfileContext } from '../../../contexts/ProfileContext'
import { Footer, Reload, Like, Dislike } from './style'
import { AiOutlineReload, AiOutlineClose, AiFillHeart } from "react-icons/ai"

export function FooterAllButtons() {

    const { profile, choosePerson, handleClear } = useContext(ProfileContext)

    return (
        <Footer>
            <Reload>
                <AiOutlineReload onClick={handleClear}/>
            </Reload>
            <Like onClick={() => choosePerson(profile.id, true)}>
                <AiFillHeart/>
            </Like>
            <Dislike onClick={() => choosePerson(profile.id, false)}>
                <AiOutlineClose/>
            </Dislike>
        </Footer>
    )
}