import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  height: 72px;
  justify-content: space-between;
  padding: 0px 24px;
  position: relative;
  z-index: 5;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
`

export const DropdownSection = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;

`

export const Select = styled.select`
  background: white;
  border: none;
`

export const Actions = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 15px;
  width: 84px;
`
