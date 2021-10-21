import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext";
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai"
import { ThemeProvider } from 'styled-components'
import { MdDarkMode } from "react-icons/md";
import { Wrapper, Header, MatchesBtnWrapper, MatchesBtn, Main, ProfileCard, Avatar, Name, Description, InfoWrapper, Footer, Reload, CardWrapper } from './style'

export function MatchesPage() {

    const {matches, getMatches, handleClear} = useContext(ProfileContext)
    const {theme, themeSwitcher} = useContext(ThemeContext)

    useEffect(() => {
        getMatches()
    }, [])

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Header>
                        <MdDarkMode  style={{fontSize: '22px', cursor: 'pointer'}} onClick={themeSwitcher}/>
                        <MatchesBtnWrapper>
                            <MatchesBtn>
                            <Link style={{textDecoration:'none', color: theme.text}}to='/'>Voltar</Link>
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
            </ThemeProvider>
        </div>
    )
}