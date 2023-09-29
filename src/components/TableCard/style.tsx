import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-width: 265px;
`

export const CarImg = styled.img`
  border-radius: 4px;
  border: 1px solid var(--neutrals-neutral-8, #EFEFEF);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08); 
  height: 72px;
  margin-right: 16px;
  width: 96px;
`

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`

interface ParagraphType {
  fontWeight: string;
  changeColor: string;
}

export const Span = styled.span<ParagraphType>`
  align-items: center;
  color: ${props => props.changeColor};
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  line-height: 12px; 
  letter-spacing: -0.3px;
`

export const Dot = styled.div`
  background: #A3A3A3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin: 0 4px;
  height: 5px;
  width: 5px;
`

export const WrapperP = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
`