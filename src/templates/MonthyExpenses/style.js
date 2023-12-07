import styled from "styled-components";

export const Container = styled.div`
    grid-area: menu;
    background: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);

    display: grid;
    grid-template-columns:450px ;
    grid-template-rows: 105px 80.4vh;
    grid-template-areas: 
    "header header"
    "content content";

`

export const Content = styled.div `
    grid-area: content;
    display: flex;
    margin: auto;
`

export const TableContent = styled.div`

    display: flex;
    max-height: 550px;
    justify-content: space-between;
`;
