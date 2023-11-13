import styled from "styled-components";

export const Container = styled.div `
   width:100%;
   height:99.9vh;

  justify-content: center;

  > header {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        height: 70px;
        width: 100%;
        padding: 10px;
        
        display: flex;
        align-items: center;
        justify-content: end;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
   
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

        button{
          margin-right: 60px;
        }
        
  }
  
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
   
`

export const Form = styled.div `
  height: 400px;
  width: 450px;
  margin: auto;
  margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px;
 

  
  background-color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 10px;
  > h2 {
      color: ${({theme}) => theme.COLORS.BLACK_300};
      font-weight: bold;
      margin-bottom: 30px
    }

  > input {
    margin-top: 1px;
  }

`

export const Content = styled.div `
  margin-top: 50px;

   
  svg {
    width: 100%;
    height: 50px;
  }
   h1 {
    margin-bottom: 20px;
  }
  text-align: center;
   
  
  
 
 
`

