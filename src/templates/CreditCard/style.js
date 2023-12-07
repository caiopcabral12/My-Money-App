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
    table:first-child{
        overflow-y: auto;
    }
`

export const TableContent = styled.div`
    max-height: 550px;
    width: 700px;
    margin: 20px;
    flex-direction: column;
    
    padding: 10px;
    border-radius: 15px;

    .Section1:first-child,.Section2:first-child {
        margin-bottom: 20px;
    }

    .InfoTitle{
        font-size: 25px;
        padding: 6px;
    }

    .Infos {
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px dotted black;

        .spanNumbers1{
            font-weight: bold;
        }

        
    }

    .Section1, .Section2{
        background-color: ${({theme}) => theme.COLORS.WHITE_3};
        padding: 30px;
        border-radius: 15px;

    }
    
    .Section2 {
        .Infos:last-child, .Limit{
            font-weight: bold;
        }

        .Limit{
            padding-left: 10px;
        }
    }
    
`;
