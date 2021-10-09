import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"
import axios from "axios"
import RemoveIcon from "./close.png"


const Container = styled.main`
    width: 40%;
    height: 70vh;
    background-color: #1D1E22;
    border-radius: 10px;
    margin: 15px auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media(max-width: 950px) {
        width: 70%;
    }
    @media(max-width: 560px) {
        width: 90%;
    }
    @media(max-width: 440px) {
        margin: 0 auto;
        width: 100%;
        border-radius: 0;
        height: 90vh;
    }
`
const WrapperInfo = styled.div`
    width: 70%;
    height: 56%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media(max-width: 560px) {
        width: 80%;
    }
`
const Title = styled.h2`
    font-size: 2em;
    color: #FFFF;
    margin-bottom: 15px;
    @media(max-width: 560px) {
        font-size: 1.7em;
    }
    @media(max-width: 440px) {
        font-size: 1.5em;
    }
`
const Button = styled.button`
    margin-top: 5px;
    width: 30%;
    padding: .6em 0;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    border: none;
    border-radius: 6px;
    margin-bottom: 6px;
    color: #1D1E22;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    height: 40px;
    &:hover {
        opacity: 0.9;
    }
`
const List = styled.ul`
    list-style-type: none;
    margin: 10px 0;
    width: 70%;
    height: 40%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        background-color: #FFFFFF;
        width: 0.001px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #00000020;
        border-radius: 5px;
    }
`
const Wrapper = styled.div`
    background-color: #1D1E22;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    padding: 5px 10px;
    background-color: #2F3137;
    border-radius: 6px;
`
const UserInfoContainer = styled.div`
    display: ${props => props.hideButton ? 'none' : 'flex'};
    flex-flow: column nowrap;
    justify-content: center;
    /* background-color: lime; */
    height: 100px;
`
const ListItem = styled.li`
    font-size: 0.9em;
    padding: 2.5px 5px;
    height: 100%;
    cursor: pointer;
    color: #FFF;
    &:nth-child(2n) {
        margin: 5px 0;
    }
`
const Remove = styled.img`
    cursor: pointer;
    width: 10px;
    display: ${props => props.hideButton && 'none'};
`
const RemoveBtn = styled.button`
    display: ${props => props.hideButton && 'none'};
    width: 25%;
    height: 100%;
    background-color: #2F3137;
    outline: none;
    border: none;
    color: #FFF;
    border-radius: 6px 0 0 6px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    &:hover {
        opacity: 0.9;
    }
`
const InfoContainer = styled.div`
    height: 75%;
    margin: 20px 0;
    width: 100%;
    color: #FFF;
    /* background-color: lime; */
`
const EditBtn = styled.button`
    cursor: pointer;
    width: 45%;
    height: 100%;
    background-color: #413EF7;
    outline: none;
    border: none;
    border-radius: 0 6px 6px 0;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        opacity: 0.9;
    }
    display: ${props => props.hideButton && 'none'};
`
const BackButton = styled.button`
    margin-top: -20px;
    height: 40px;
    width: 70%;
    border-radius: 6px;
    border: none;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        opacity: 0.9;
    }

`
const BtnContainer = styled.div`
    /* background-color: lime; */
    height: 40px;
    margin-top: 40px;
    display: ${props => props.hideButton ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
`
const InputContainer = styled.div`
    margin-top: 40px;
    height: 80%;
    /* background-color: red; */
    display: ${props => props.editSection ? 'flex' : 'none'};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`
const NewName = styled.input`
    margin-bottom: 3px;
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    border-radius: 6px 6px 0 0;
    height: 40px;
    padding: .5em .5em;
    font-size: 1em;
    background-color: #2F3137;
    outline: none;
    border: none;
    color: #FFF;
    margin-bottom: 3px;
    &:focus {
        border: 1.5px solid #FFFfff30;
    }
`
const NewEmail = styled(NewName)`
    margin-bottom: 30px;
    border-radius: 0 0 6px 6px;
`
const SaveEdit = styled.button`
    width: 70%;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    background-color: #413EF7;
    outline: none;
    border: none;
    border-radius: 6px;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    &:hover {
        opacity: 0.9;
    }
`
const SearchContainer = styled.div`
    height: 35px;
    width: 70%;
    display: flex;
`
const SearchUser = styled(NewEmail)`
    height: 100%;
    width: 70%;
    padding: .5em .5em;
    font-size: 1em;
    background-color: #2F3137;
    outline: none;
    border: none;
    color: #FFF;
    border-radius: 6px 0 0 6px;
    margin-bottom: 6px;
`
const SearchBtn = styled(EditBtn)`
    height: 100%;
    width: 30%;
    font-family: 'Montserrat', sans-serif;
    background-color: #413EF7;
    outline: none;
    border: none;
    border-radius: 0 6px 6px 0;
    margin-bottom: 6px;
    color: #FFF;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms linear;
    &:hover {
        opacity: 0.9;
    }
`
const EditContainer = styled.div`
    height: 70%;
    /* background-color: lime; */
`
const is_rotating = keyframes`
    to {
    transform: rotate(1turn);
    }
`
const Loader = styled.div`
    animation: ${is_rotating} 1s infinite;
    border: 6px solid #2F3137;
    border-radius: 50%;
    border-top-color: #413EF7;
    height: 40px;
    width: 40px;
    margin: 20% auto;
`
const LabelEdit = styled(Title)`
    font-size: 1.2em;
`
const NoUserAlert = styled(LabelEdit)`
    text-align: center;
    margin-top: 20%;
`
const LabelInfo = styled.div`
    margin-top: -40px;
    text-align: center; 
`
const Table = styled.table`
    display: ${props => props.handleTable ? 'none' : 'inline-table'};
    padding: 0.1em;
    background-color: #ffffff20;
    /* background-color: #3D3BE120; */
    border-radius: 5px;
`
const TableRow = styled.tr`
    font-size: .9em;
    height: 2em;
    background-color: #2F3137;
    width: 10px;
`
const TableHead = styled.th`
    padding-left: 10px;
    padding-right: 10px;
`
const TableData = styled.td`
    padding-left: 10px;
    padding-right: 10px;
`

function RegisteredUsers({handleScreen}) {
    const [allUsers, setAllUsers] = useState([])
    const [userInfoScreen, setUserInfoScreen] = useState(false)
    const [userInfo, setUserInfo] = useState([])
    const [editSection, setEditSection] = useState(false)
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [searchUserInput, setSearchUserInput] = useState('')
    const [loading, setLoading] = useState(true);

    const getAllUsers = async () => {
        const getAllUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const authKEY = { headers: {Authorization: 'juliano-banu'} }
        await axios.get(getAllUsers, authKEY)
        .then(res => {
            setAllUsers(res.data)
            setLoading(false)
        })
        .catch(rej => console.log(rej))
    }

    const deleteUser = async (id) => {
        let filterOfRemoved = allUsers.filter(item => item.id !== id)
        let userAnswer = window.confirm('Quer mesmo deletar o usuário?')
        if (userAnswer) {
            setUserInfo([])
            const deleteUser = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            const authKEY = { headers: {Authorization: 'juliano-banu'} }
            await axios.delete(deleteUser, authKEY).then(setAllUsers(filterOfRemoved)).catch(() => console.log('Oops, há algo errado...'))
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    
    // Informações do usuário

    const getUserInfo = async (id) => {
        setUserInfoScreen(!userInfoScreen)
        setEditSection(false)
        setLoading(true)
        let getUserInfo = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const authKEY = { headers: {Authorization: 'juliano-banu'} }
        await axios.get(getUserInfo, authKEY)
        .then(res => {
            setUserInfo(res.data)
            setLoading(false)
        })
        .catch(rej => console.log(rej))
    }

    const editUser = async (id) => {
        let editURL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const authKEY = { headers: {Authorization: 'juliano-banu'} }
        const body = {name: newName, email: newEmail}
        await axios.put(editURL, body, authKEY)
        .then(() => alert('Alteração realizada com sucesso!')).catch(() => alert('Oops, algo errado aconteceu...'))

        // Chamo a função pra atualizar as infos do usuário
        
        await axios.get(editURL, authKEY).then(res => setUserInfo(res.data)).catch(rej => console.log(rej))
        setEditSection(!editSection)

        // Chamo a função que atualiza a lista de usuários cadastrados.
        
        getAllUsers()
    }

    const searchUsers = async (name) => {
        setSearchUserInput('')
        setAllUsers([])
        setLoading(true)
        let searchUserURL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`
        const authKEY = { headers: {Authorization: 'juliano-banu'} }
        await axios.get(searchUserURL, authKEY)
        .then(res => {
            setAllUsers(res.data)
            setLoading(false)
        })
        .catch(() => alert('Erro'))
    }
    
    if (!userInfoScreen) {
        return (
            <>
              <Container>
                  <Title>Usuários Cadastrados</Title>
                  <SearchContainer>
                      <SearchUser
                        placeholder={'Buscar usuário'}
                        value={searchUserInput}
                        onChange={event => setSearchUserInput(event.target.value)}
                      />
                      <SearchBtn onClick={() => searchUsers(searchUserInput)}>Buscar</SearchBtn>
                  </SearchContainer>
                  <List>
                  {loading ? 
                    <Loader/>  
                    :
                    allUsers.length === 0
                    ?
                    <NoUserAlert>Não há usuários cadastrados!</NoUserAlert>
                    :
                    allUsers.map((value, i) => {
                        return (
                            <Wrapper key={i}>
                                <ListItem
                                    onClick={() => getUserInfo(value.id)}
                                >
                                {value.name}
                                </ListItem>
                                <Remove
                                    src={RemoveIcon}
                                    alt={'Remove'}
                                    onClick={() => deleteUser(value.id)}
                                />
                            </Wrapper>
                            )
                        })}
                  </List>
                  <Button
                      onClick={handleScreen}
                  >
                  Voltar
                  </Button>
              </Container>
            </>
          );
    } else {
        return (
            <>
                <Container>
                    <Title>Informações do Usuário</Title>
                    {loading ?
                        <Loader/>  
                    :
                    <WrapperInfo>
                        <InfoContainer>
                            <UserInfoContainer hideButton= {editSection}>
                                <Table border="1" handleTable= {userInfo.length === 0}>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableData>{userInfo.name}</TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Idade</TableHead>
                                        <TableData>{userInfo.email}</TableData>
                                    </TableRow>
                                </Table>
                            </UserInfoContainer>
                            {userInfo.length === 0 ?
                                <LabelInfo>
                                    <LabelEdit>Não há Informações</LabelEdit>
                                </LabelInfo>
                                : userInfo.length !== 0 ?
                                <EditContainer>
                                    <BtnContainer hideButton= {editSection}>
                                        <RemoveBtn onClick={() => deleteUser(userInfo.id)}>Remover</RemoveBtn>
                                        <EditBtn onClick={() => setEditSection(!editSection)}>Editar Informações</EditBtn>
                                    </BtnContainer>
                                    <InputContainer editSection={editSection}>
                                        <LabelEdit>Insira os novos dados</LabelEdit>
                                        <NewName
                                            placeholder={'Nome'}
                                            value={newName}
                                            onChange={event => setNewName(event.target.value)}
                                        >
                                        </NewName>
                                        <NewEmail
                                            placeholder={'Email'}
                                            value={newEmail}
                                            onChange={event => setNewEmail(event.target.value)}
                                        >
                                        </NewEmail>
                                        <SaveEdit onClick={() => editUser(userInfo.id)}>Salvar Alterações</SaveEdit>
                                    </InputContainer>
                                </EditContainer>
                                : null
                            }
                        </InfoContainer>
                        <BackButton
                            onClick={() => setUserInfoScreen(!userInfoScreen)}
                        >
                        Voltar
                        </BackButton>
                    </WrapperInfo>
                    }
                </Container>
            </>
        )
    }
  }
  
  export default RegisteredUsers;