import { useContext, useState } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
import { Wrapper, Header, LinkRouter, Main, Footer, MatchesBtnWrapper, MatchesBtn, CardWrapper, ProfileCard, ProfileInfo, Name, Age, ProfileDescription, Activity, Log, Reload, Dislike, Like } from './style'
import { AiOutlineReload, AiOutlineClose, AiFillHeart } from "react-icons/ai"
import { Toggle } from '../../components/Toggle/index'

export function HomePage() {

    const {profile, choosePerson, handleClear} = useContext(ProfileContext)

    const [handleLike, setHandleLiked] = useState(false)

    return (
      <div>
            <Wrapper>
              <Header>
                <Toggle/>
                <MatchesBtnWrapper>
                  <MatchesBtn>
                    <LinkRouter to='/matches'>Meus Matches</LinkRouter>
                  </MatchesBtn>
                </MatchesBtnWrapper>
              </Header>
              <Main>
                <CardWrapper>
                  {profile ? 
                  <ProfileCard profilePhoto={profile.photo}>
                    <ProfileInfo>
                      <div>
                        <Name>{profile.name}</Name>
                        <Age>{profile.age}</Age>
                        {profile.name && <Activity profileAge={profile.age}></Activity>}
                        {profile.name && <Log>{profile.age % 2 === 0 ? 'Online' : 'Offline'}</Log>}
                      </div>
                      <ProfileDescription>{profile.bio}</ProfileDescription>
                    </ProfileInfo>
                  </ProfileCard>
                  : handleClear()}
                </CardWrapper>
              </Main>
              <Footer>
                <Reload>
                  <AiOutlineReload onClick={handleClear}/>
                </Reload>
                <Like onClick={() => {
                  choosePerson(profile.id, true)
                  setHandleLiked(true)
                  setTimeout(() => {setHandleLiked(false)}, 400)
                  }} 
                  handleLike={handleLike}>
                  <AiFillHeart/>
                </Like>
                <Dislike onClick={() => {choosePerson(profile.id, false)}}>
                  <AiOutlineClose/>
                </Dislike>
              </Footer>
            </Wrapper>
      </div>
    );
  }
