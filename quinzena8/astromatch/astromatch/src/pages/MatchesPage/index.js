import { Link } from "react-router-dom"
import { useEffect, useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext";
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai"
import { Toggle } from '../../components/Toggle/index'
import { Wrapper, Header, MatchesBtnWrapper, MatchesBtn, Main, ProfileCard, Avatar, Name, Description, InfoWrapper, Footer, Reload, CardWrapper } from './style'

export function MatchesPage() {

    const {matches, getMatches, handleClear} = useContext(ProfileContext)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        getMatches()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Wrapper>
                <Header>
                    <Toggle/>
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
                                        <div>
                                            <Name>{profile.name}</Name>
                                        </div>
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