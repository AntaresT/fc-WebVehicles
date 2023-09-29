import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
`

export const IconContainer = styled.section`
  bottom: 24px;
  right: 24px;
  position: absolute;
`

export const Menu = styled.ul`
  margin: 24px;
  background: var(--mono-white, #FFF);

`

export const ItemMenu = styled.li`
  align-items: center;
  background: var(--mono-white, #FFF);
  border-radius: 6px;
  color: var(--secondary-blue-5, #1D2C4B);
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px; 
  height: 40px;
  width: 232px;

  &:hover{
    background: var(--primary-blue-5, #0065FF);
    border-radius: 6px;
    color: var(--mono-white, #FFF);
  }

  &:active{
    background: var(--primary-blue-5, #0065FF);
    border-radius: 6px;
    color: var(--mono-white, #FFF);
  }


`

export const ImgIcon = styled.img`
  align-items: center;
  display: flex;
  flex-shrink: 0; 
  justify-content: center;
  height: 24px;
  margin-right: 8px;
  width: 24px;

  &:active{
    fill: var(--mono-white, #FFF);
  }

  
`