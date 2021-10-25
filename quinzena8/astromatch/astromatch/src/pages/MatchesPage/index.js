import { useEffect, useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext";
import { AiOutlineReload } from "react-icons/ai"
import { Toggle } from '../../components/Toggle/index'
import { Wrapper, Header, LinkRouter, MatchesBtnWrapper, MatchesBtn, Main, ProfileCard, Avatar, Name, Description, ArrowLeft, AlertMessage, InfoWrapper, Footer, Reload, CardWrapper } from './style'
import { Loader } from '../../components/Loader/index'
import { Modal } from '../../components/Modal/index'

export function MatchesPage() {

    const {matches, getMatches, handleClear, loading} = useContext(ProfileContext)

    useEffect(() => {
        getMatches()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Wrapper>
                <Modal/>
                <Header>
                    <Toggle/>
                    <MatchesBtnWrapper>
                        <MatchesBtn>
                        <LinkRouter to='/'>Voltar<ArrowLeft/></LinkRouter>
                        </MatchesBtn>
                    </MatchesBtnWrapper>
                </Header>
                <Main>
                    {loading ? 
                    <Loader/>
                    :
                    matches.length ? 
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
                    :
                    <AlertMessage>Ainda não há matches, continue <strong>curtindo</strong> novos perfis</AlertMessage>
                    }
                </Main>
                {matches.length > 0 && 
                <Footer>
                    {loading || <Reload><AiOutlineReload onClick={handleClear}/></Reload>}
                </Footer>}
            </Wrapper>
        </div>
    )
}