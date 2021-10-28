import { useEffect, useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext";
import { AiOutlineReload } from "react-icons/ai"
import { Toggle } from '../../components/Global/Toggle/index'
import { Wrapper, Header, LinkRouter, MatchesBtnWrapper, MatchesBtn, Main, ArrowLeft, Footer, Reload } from './style'
import { Loader } from '../../components/Global/Loader/index'
import { Toast } from '../../components/Global/Toast/index'
import { ProfileCard } from "../../components/MatchesComponents/ProfileCard";
import { BadRequest } from '../../components/Global/BadRequest/index'
import { NoMatchAlert } from "../../components/MatchesComponents/NoMatchAlert";

export function MatchesPage() {

    const {matches, getMatches, handleClear, loading, errorLog, clearErrorLogAndToast} = useContext(ProfileContext)

    useEffect(() => {
        getMatches()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Wrapper>
                <Toast/>
                <Header>
                    <Toggle/>
                    <MatchesBtnWrapper onClick={clearErrorLogAndToast}>
                        <MatchesBtn>
                        <LinkRouter to='/'>Voltar<ArrowLeft/></LinkRouter>
                        </MatchesBtn>
                    </MatchesBtnWrapper>
                </Header>
                <Main>
                    {loading ? 
                    <Loader/>
                    :
                    matches.length && errorLog === 0 ? 
                    <ProfileCard/>
                    :
                    errorLog === 1 ? 
                    <BadRequest/>
                    :
                    <NoMatchAlert/>
                    }
                </Main>
                {matches.length > 0 && 
                <Footer>
                    {loading || <Reload><AiOutlineReload onClick={handleClear}/></Reload>}
                </Footer>
                }
            </Wrapper>
        </div>
    )
}