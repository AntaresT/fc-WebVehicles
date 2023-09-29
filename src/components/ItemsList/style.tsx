import styled from "styled-components";

export const Container = styled.section`
  background: var(--neutrals-neutral-10, #F9F9F9);
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  height: 100%;
  width: 100%;
`

export const TopActions = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 40px;
  margin-top: 24px;
`

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.h4`
  color: var(--secondary-blue-5, #1D2C4B); 
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  margin-right: 16px;
`

export const ButtonFilter = styled.button`
  align-items: center;
  background: var(--mono-white, #FFF);
  border-radius: 6px;
  border: 1px solid var(--primary-blue-9, #CCE8FE);
  color: var(--primary-blue-5, #0065FF);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  gap: 8px;
  padding: 8px 16px;
  line-height: 14px; 
  letter-spacing: -0.35px; 
  margin-right: 16px;

  &:hover{
    transform: scale(1.1);
    transition-property: transform, box-shadow;
    transition-duration: .5s;
    border: 1px solid var(--primary-blue-9, #CCE8FE);

    &:svg{
      fill: #FFF;
    }
  }
`

export const ButtonAdd = styled.button`
  align-items: center;
  background: var(--primary-blue-5, #0065FF);
  border-radius: 6px;
  border: none;
  color: var(--mono-white, #FFF);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  gap: 8px;
  padding: 8px 16px;
  line-height: 14px;
  letter-spacing: -0.35px; 

  &:hover{
    transform: scale(1.1);
    transition-property: transform, box-shadow;
    transition-duration: .5s;
    border: 1px solid var(--primary-blue-9, #CCE8FE);

  }
`
