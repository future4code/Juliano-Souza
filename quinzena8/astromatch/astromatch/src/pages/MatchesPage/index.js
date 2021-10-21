import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext";
import { themes } from '../../constants/colors'
import { Logo } from '../../components/Logo'
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai"
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { Wrapper, Header, MatchesBtnWrapper, MatchesBtn, Main, ProfileCard, Avatar, Name, Description, InfoWrapper, Footer, Reload, CardWrapper } from './style'

export function MatchesPage() {

    const {matches, getMatches, handleClear} = useContext(ProfileContext)

    useEffect(() => {
        getMatches()
    }, [])

    return (
        <div>
            <Wrapper>
                <Header>
                    {/* <Logo/> */}
                    {/* <BsToggleOff style={{fontSize: '22px'}}/> */}
                    <BsToggleOn  style={{fontSize: '22px', cursor: 'pointer'}}/>
                    <MatchesBtnWrapper>
                        <MatchesBtn>
                        <Link style={{textDecoration:'none', color: themes.darkMode.text}}to='/'>Voltar</Link>
                        <BsArrowLeft style={{fontSize: '18px'}}/>
                        </MatchesBtn>
                    </MatchesBtnWrapper>
                </Header>
                <Main>
                    <CardWrapper>
                        {matches.map((profile, i) => {
                            return (
                                <ProfileCard key={i}>
                                    <Avatar avatar={profile.photo}></Avatar>
                                    <InfoWrapper>
                                        <Name>{profile.name}</Name>
                                        <Description>{profile.bio}</Description>
                                    </InfoWrapper>
                                </ProfileCard>
                            )
                        })}
                    </CardWrapper>
                </Main>
                <Footer>
                    <Reload>
                        <AiOutlineReload onClick={handleClear}/>
                    </Reload>
                </Footer>
            </Wrapper>
        </div>
    )
}