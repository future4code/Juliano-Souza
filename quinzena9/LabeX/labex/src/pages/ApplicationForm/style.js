import styled from "styled-components";

// Assets
import Blob from '../../assets/Images/blob-grey.svg'

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
export const Section = styled.form`
    grid-area: Section;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Blob});
    background-position: center;
    background-size: 75%;
`

export const FormWrapper = styled.div`
    width: 400px;
    height: 80vh;
    border: 1.25px solid #464646;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #272727;
    border-radius: 12px;
    @media (max-width: 415px) {
        width: 320px;
    }
`
export const Title = styled.h3`
    font-size: 30px;
    font-weight: 700;
`
export const InputBox = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 340px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    /* background-color: red; */
`
export const Input = styled.input`
    width: 100%;
    padding: 0 10px;
    height: 46px;
    margin-bottom: 5px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
    background-color: #2c2c2c;
    color: #FFFFFF;
    &:focus {
        border: 1.25px solid #464646;
    }
`

export const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;

`