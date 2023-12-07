import styled from "styled-components";

export const Container = styled.div `
grid-area: header;

   height: 105px;
 
   background: linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121));
   border-radius: 20px;
   display: flex;
   justify-content: space-between;
`

export const Brand = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 20px;
   width: 400px;
   background: ${({theme}) => theme.COLORS.BACKGROUND_800};
   color: ${({theme}) => theme.COLORS.WHITE_1};
   font-family: 'Outfit', sans-serif;
   font-weight: 900;
   font-size: large;
 
   border-top-left-radius: 20px;
   border-bottom-left-radius: 20px;

     svg {
      width: 100%;
      height: 30px;
    }

`

export const Content = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   text-align: start;
   font-weight: 800;
   width: 800px;
  
   

   span {
      font-size: large;
   }

   strong {
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE_1};
   }
`

export const Logout = styled.button`

    border:none;
    background: none;
    padding-right: 50px;

  
   
    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 25px; 

    }
    `