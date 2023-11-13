import  styled  from "styled-components";

export const Container = styled.button`
  width: 100% ;
  background-color: ${({theme}) => theme.COLORS.BLUE};
  color: ${({theme}) => theme.COLORS.WHITE};

  height: 56px;
  border: 0;
  padding: 0 16px;
 
  border-radius: 10px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  };


`