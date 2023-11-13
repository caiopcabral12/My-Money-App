import styled from "styled-components";

export const Container = styled.div`
grid-area: brand;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 20px;
   width: 250px;

   border-right-width: 1px;
   border-right-style: solid;
   border-right-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

     svg {
      width: 100%;
      height: 30px;
    }
`