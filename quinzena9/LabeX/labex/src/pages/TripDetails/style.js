import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import blob from '../../assets/Images/blob-grey.svg'
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid: 8vh 87vh 5vh / 1fr;
    grid-template-areas:
        'Header' 
        'Section'
        'Footer'
    ;
`
export const Section = styled.div`
    grid-area: Section;
    display: grid;
    place-items: center;
    background-image: url(${blob});
    background-position: center;
    background-size: 75%;
`
export const CandidatesWrapper = styled.div`
    padding: 20px;
    width: 80%;
    height: 80%;
    background-color: #2C2C2C;
    border-radius: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-end;
`
export const TitleAndButtonBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonsBox = styled.div`
    display: flex;
    align-items: center;
    /* background-color: green; */
`
export const Candidates = styled.div`
    width: 100%;
    max-height: 350px;
    padding: 10px;
    overflow-y: auto;
    ::-webkit-scrollbar-track {
        background-color: #272727;
    }
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 25px;
    }
`
export const Approved = styled.div`
    /* background-color: green; */
    width: 40%;
    height: 100%;
`
export const Title = styled.h3`
    font-size: 35px;
`
export const ProfileWrapper = styled.div`
    padding: 10px 16px;
    background-color: #272727;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    margin: 8px 0;
    transition: filter 300ms ease-in-out;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    position: relative;
    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`
export const PrimaryInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
`
export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`
export const Age = styled.p`
    font-size: 15px;
    margin-left: 10px;
`
export const Profession = styled.p`
    margin-left: 10px;
    font-size: 15px;
`
export const Country = styled.p`
    margin-left: 10px;
    font-size: 14px;
    &::before {
        content: '|';
        margin-right: 10px;
    }
`
export const ApplicationText = styled.p`
    padding-top: 4px;
    font-size: 14px;
    color: #FFFFFF95;
`

// Icons
export const Icons = styled.div`
    width: 85px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    right: 0;
    position: absolute;
`
export const CheckIcon = styled(IoIosCheckmark)`
    font-size: 40px;
    filter: brightness(0.8);
    &:hover {
        color: green;
    }
`
export const CloseIcon = styled(IoIosClose)`
    filter: brightness(0.8);
    font-size: 40px;
    &:hover {
        color: red;
    }
`
export const LinkRouter = styled(Link)`
    color: inherit;
    text-decoration: none;
`


// Icon

export const MenuIcon = styled(RiMenuFill)`
    font-size: 35px;
    cursor: pointer;
    display: none;
    @media (max-width: 650px) {
        display: block;
    }
`

export const ButtonBox = styled.div`
    margin-left: 10px;
    @media (max-width: 650px) {
        display: none;
        
    }
    
`