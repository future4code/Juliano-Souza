import { useContext } from 'react'
import {ProfileContext} from '../../../contexts/ProfileContext'
import { CardWrapper, Card, Avatar, InfoWrapper, Name, Description } from './style'

export function ProfileCard() {

    const { matches } = useContext(ProfileContext)

    return (
        <CardWrapper>
            {matches.map((profile, i) => {
                return (
                    <Card key={i}>
                        <Avatar avatar={profile.photo}></Avatar>
                        <InfoWrapper>
                            <div>
                                <Name>{profile.name}</Name>
                            </div>
                            <Description>{profile.bio}</Description>
                        </InfoWrapper>
                    </Card>
                )
            })}
        </CardWrapper>
    )
}