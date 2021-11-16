import styled from 'styled-components'

export const DropWrapper = styled.ul`
    background-color: #2C2C2C;
    width: 100%;
    height: 46px;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
`
export const Dropdown = styled.ul`
    background-color: #2C2C2C;
    width: 100%;
    height: 220px;
    position: absolute;
    margin-top: -195px;
    border-radius: 8px 8px 0 0;
    padding: 4px 4px;
    overflow-y: auto;
    display: ${p => p.handleVisibility ? 'block' : 'none'};
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
export const DropItemSelected = styled.span`
    padding-left: 10px;
    font-size: 14px;
    color: ${p => p.itemName ? '#FFFFFF' : '#757575'};
    font-weight: 500;
`
export const DropItem = styled.ul`
    background-color: #414141;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-size: 15px;
    filter: brightness(.9);
    &:hover {
        filter: brightness(1);
        cursor: pointer;
    }

`