import { useContext } from 'react'
import {ProfileContext} from '../../../contexts/ProfileContext'
import { Card, ProfileInfo, Name, Age, ProfileDescription, Activity, Log } from './style'



export function ProfileCard() {

    const { profile } = useContext(ProfileContext)

    return (
        <Card profilePhoto={profile.photo}>
            <ProfileInfo>
                <div>
                <Name>{profile.name}</Name>
                <Age>{profile.age}</Age>
                {profile.name && <Activity profileAge={profile.age}></Activity>}
                {profile.name && <Log>{profile.age % 2 === 0 ? 'Online' : 'Offline'}</Log>}
                </div>
                <ProfileDescription>{profile.bio}</ProfileDescription>
            </ProfileInfo>
        </Card>
    )
}