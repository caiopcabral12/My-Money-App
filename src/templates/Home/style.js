import styled from "styled-components"


export const Container = styled.div`
grid-area: menu;
background: #eaf6f6;

display: grid;
    grid-template-columns:450px ;
    grid-template-rows: 105px 80.4vh;
    grid-template-areas: 
    "header header"
    "navigation content";
    padding: 20px 20px;
`

export const Navigation = styled.div`
   grid-area: navigation;
   background-color: ${({theme}) => theme.COLORS.BLUE};

   width: 370px;
   height: 500px;
   margin-top: 50px;
   margin-left: 80px;
   padding: 20px;
   align-self: center;
   text-align: center;

   border-radius: 20px;
   box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);

   ul {
    list-style: none;
    margin-top: 30px;
   }

   li {
   padding: 10px;
   }
`

export const ProfilePic = styled.div`
    display: flex;
    
    flex-direction: column;
    align-items: center;
    text-align: center;



    >img{ 
     margin-top: 20px;
     margin-bottom: 10px;
     width: 135px;
     height: 135px;
     border-radius: 50%;
    }

    `
export const Content = styled.div`
    grid-area: content;
    display: flex;
    font-weight: bold;
   
    flex-direction: row;
    flex-wrap: wrap;
   
   
    .Calendary {
        width: 400px;
        height: 250px;
        margin-top: 10px;
         display: flex;
        flex-direction: column;
        align-items: center;
    }

    .CreditCard, .Savings {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        height: 200px;
    }

    .Month, .Receive, .Pay {
        display: flex;
        flex-direction: column;
        align-items: center;
 
    }

 svg{
            width: 150px;
            height: 150px;
            color: ${({theme}) => theme.COLORS.BLUE};
        }

`

export const Boxes = styled.button`
    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: ${({theme}) => theme.COLORS.WHITE_1};
    color: ${({theme}) => theme.COLORS.BLACK_300};
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    display: flex;
    flex-direction:row;
    justify-content: center;

    margin: 30px;

 
`