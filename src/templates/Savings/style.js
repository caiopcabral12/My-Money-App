import styled from "styled-components";

export const Container = styled.div`
    height: 95.5vh;
`

export const Content = styled.ul`
    max-height: 550px;
    width: 80%;
    margin: 100px auto;
    flex-direction: column;
    font-size: 17px;
    
    padding: 10px;
    border-radius: 15px;

    .btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button{
            width: 200px;
            margin: 10px auto;
            
        }
    }
     
   
        svg {
      width: 100%;
      height: 30px;
      background: none;
    }

    .InfoTitle{
        font-size: 25px;
        padding: 5px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;

        button{
            background: none;
        }
        
    }

    .Infos {
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px dotted black;

        .liNumbers{
            font-weight: bold;
            list-style: none;
        }   
    }

    .Total{
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        list-style: none;
    }

    .Section{
        background-color: ${({theme}) => theme.COLORS.WHITE_3};
        padding: 30px;
        border-radius: 15px;
    }
    
`;
