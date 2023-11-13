import styled from "styled-components";

export const Container = styled.div `
grid-area: header;
   height: 105px;
   width: 100%;
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

   display: flex;
   justify-content: space-between ;
   padding: 0 25px;
  
 
`

export const Content = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   font-weight: 800;

   
   



   span {
      font-size: large;
   }

   strong {
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.BLUE};
   }
`

export const Logout = styled.button`

    border:none;
    background: none;
  
   
    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 25px; 

    }
    `