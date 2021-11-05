import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import { Wrapper, Header, LinkRouter, Main, MatchesBtnWrapper, MatchesBtn, CardWrapper } from './style'
import { Toggle } from '../../components/Global/Toggle/index'
import { Loader } from '../../components/Global/Loader/index'
import { Toast } from '../../components/Global/Toast/index'
import { ProfileCard } from '../../components/HomeComponents/ProfileCard/index'
import { BadRequest } from '../../components/Global/BadRequest'
import { NoProfile } from '../../components/HomeComponents/NoProfile/index'
import { FooterAllButtons } from '../../components/HomeComponents/FooterAllButtons/index'
import { FooterReloadButton } from '../../components/HomeComponents/FooterReloadButton/index'

export function HomePage() {

    const { profile, loading, setLoading, errorLog, clearErrorLogAndToast } = useContext(ProfileContext)

    return (
      <div>
          <Wrapper>
            <Toast/>
            <Header>
              <Toggle/>
              <MatchesBtnWrapper onClick={clearErrorLogAndToast}>
                <MatchesBtn>
                  <LinkRouter to='/matches' onClick={() => setLoading(!loading)}>Meus Matches</LinkRouter>
                </MatchesBtn>
              </MatchesBtnWrapper>
            </Header>
            <Main>
              <CardWrapper>
                {loading ? 
                <Loader/>
                : 
                profile && errorLog === 0 ? 
                <ProfileCard/>
                : errorLog === 1 || errorLog === 2 ?
                <BadRequest/>
                :
                <NoProfile/>
                }
              </CardWrapper>
            </Main>
            {loading ?
            null
            :
            profile && errorLog === 0 ?
              <FooterAllButtons/>
            :
              <FooterReloadButton/>
            }
          </Wrapper>
      </div>
    );
  }
