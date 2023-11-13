import styled from "styled-components"


export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    display: grid;
    grid-template-columns:250px auto;
    grid-template-rows: 105px 128px auto 79px;
    grid-template-areas: 
    " brand header"
    "menu menu";



`

export const Menu = styled.div`
grid-area: menu;
       background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};


`