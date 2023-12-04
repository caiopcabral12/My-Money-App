import styled from "styled-components";

export const Container = styled.table `
  color: ${({theme}) => theme.COLORS.BLUE_4};
  width: 1200px;
  margin: auto;
  text-align: start;
  font-family: 'Ubuntu', sans-serif;

    table, th, td{
        border-top: 1px solid;
        border-collapse: collapse;
        border-color: ${({theme}) => theme.COLORS.WHITE_4};
    }

    th{
        position: sticky;
        top: -1px;
        padding: 15px;
        width: 1000px;
        height: 40px;
        text-align: start;
        background-color: ${({theme}) => theme.COLORS.BLUE};
        color: ${({theme}) => theme.COLORS.WHITE_1}
        
    }

    tbody tr:hover td {
        background-color: ${({theme}) => theme.COLORS.BLUE_3};
        transition: 0.2s;
    }
    td{
        padding: 15px;
        height: 60px;
        background: ${({theme}) => theme.COLORS.WHITE_3};
    }


    tr:first-child th:first-child {
        border-top-left-radius: 15px; 
    }

    tr:first-child th:last-child {
        border-top-right-radius: 15px;
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: 15px;
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: 15px; 
    }

    th:first-child{
        width: 10%;
    }

    th:nth-child(2) {
        width: 20%;
    }

    th:nth-child(3) {
        width: 60%;
    }
    
    td:nth-child(4), td:last-child{
        text-align: center;
    }

    th:last-child{
        width: 10%;
        text-align: center;    
    }
  
    svg:hover {
        transform: scale(1.2);
        transition: 0.2s
    }

    button{
        background: none;
    }
    `