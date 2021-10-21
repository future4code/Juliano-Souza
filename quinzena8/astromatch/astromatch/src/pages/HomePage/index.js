import { useContext } from 'react'
import {ProfileContext} from '../../contexts/ProfileContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from "react-router-dom"
import { Wrapper, Header, Main, Footer, MatchesBtnWrapper, MatchesBtn, CardWrapper, ProfileCard, ProfileInfo, Name, Age, ProfileDescription, Activity, Log, Reload, Dislike, Like } from './style'
// import { Logo } from '../../components/Logo'
import { AiOutlineReload, AiOutlineClose, AiFillHeart } from "react-icons/ai"
import { MdDarkMode } from "react-icons/md";

export function HomePage() {

    const {profile, choosePerson, getProfile, handleClear} = useContext(ProfileContext)
    const {theme, themeSwitcher} = useContext(ThemeContext)

    return (
      <div>
            <Wrapper>
              <Header>
                <MdDarkMode  style={{fontSize: '22px', cursor: 'pointer', color: theme.text}} onClick={themeSwitcher}/>
                <MatchesBtnWrapper>
                  <MatchesBtn>
                    <Link style={{textDecoration:'none', color: theme.text}}to='/matches'>Meus Matches</Link>
                  </MatchesBtn>
                </MatchesBtnWrapper>
              </Header>
              <Main>
                <CardWrapper>
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
                </CardWrapper>
              </Main>
              <Footer>
                <Reload>
                  <AiOutlineReload onClick={handleClear}/>
                </Reload>
                <Like onClick={() => choosePerson(profile.id)}>
                  <AiFillHeart/>
                </Like>
                <Dislike onClick={getProfile}>
                  <AiOutlineClose/>
                </Dislike>
              </Footer>
            </Wrapper>
      </div>
    );
  }
