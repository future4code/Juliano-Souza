import React, {useState} from "react";
import { createGlobalStyle } from 'styled-components';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import RegisteredUsers from "./components/Main/RegisteredUsers";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`

function App() {

  const [registeredUsers, setRegisteredUsers] = useState(false)

  const handleScreen = () => {
    setRegisteredUsers(!registeredUsers)
  }

  if (!registeredUsers) {
    return (
      <>
        <GlobalStyle/>
        <Header/>
        <Main
          handleScreen={handleScreen}
        />
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle/>
        <Header/>
        <RegisteredUsers
          handleScreen={handleScreen}
        />
      </>
    )
  }
}

export default App;
