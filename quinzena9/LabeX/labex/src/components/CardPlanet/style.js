import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    min-width: 250px;
    height: 100%;
    background-color: #272727;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 300ms ease-in-out;
    transform: scale(0.97);
    &:hover {
        transform: scale(1);
        cursor: pointer;
    }
`
export const Title = styled.h3`
    font-size: 28px;
    margin-bottom: 10px;
`
export const CaracteristicsWrapper = styled.ul`
    list-style-type: none;
`
export const Caracteristic = styled.li`
    font-size: 15px;
    margin-bottom: 2px;
`
export const Price = styled.span`
    display: block;
    font-size: 15px;
    margin-top: 10px;
`
export const Value = styled.span`
    font-size: 20px;
    font-weight: 600;
`
export const Image = styled.img`
    max-width: 300px;
`