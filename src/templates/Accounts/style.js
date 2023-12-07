import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "Navigation"
    "Content";
`

export const Navigation = styled.div`
    display: flex;
    margin-top: 50px;

    button {
        height: 100px;
        margin: 0 20px 50px 20px;
    }
`

export const Content = styled.div`
`