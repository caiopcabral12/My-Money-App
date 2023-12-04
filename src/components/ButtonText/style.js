import { styled } from "styled-components";

export const Container = styled.button`
   background: none;
   border: none;
   color: ${({theme, isActive}) => isActive ? theme.COLORS.GREEN : theme.COLORS.WHITE_1};
   transition: 0.2s; 
  `
