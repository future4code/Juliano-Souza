import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'
import { Wrapper, Header, LinkRouter, Main, MatchesBtnWrapper, MatchesBtn, CardWrapper } from './style'
import { Toggle } from '../../components/Global/Toggle/index'
import { Loader } from '../../components/Global/Loader/index'
import { Toast } from '../../components/Global/Toast/index'
import { ProfileCard } from '../../components/HomeComponents/ProfileCard/index'
import { BadRequest } from '../../components/Global/BadRequest'
import { NoProfile } from '../../components/NoProfile'
import { FooterAllButtons } from '../../components/FooterAllButtons'
import { FooterReloadButton } from '../../components/FooterReloadButton'

export function HomePage() {

    const {profile, loading, setLoading, errorLog, handleClearError} = useContext(ProfileContext)

    return (
      <div>
            <Wrapper>
              <Toast/>
              <Header>
                <Toggle/>
                <MatchesBtnWrapper>
                  <MatchesBtn onClick={handleClearError}>
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
