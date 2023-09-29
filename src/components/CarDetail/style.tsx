import styled from 'styled-components'

export const Container = styled.section`
  background: var(--neutrals-neutral-10, #F9F9F9);
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  height: 100%;
  width: 100%;
`

export const TopSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 40px;
  margin-top: 24px;
`

export const Title  = styled.title`
  align-items: center;
  color: var(--secondary-blue-5, #1D2C4B); 
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  margin-right: 16px;
`

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: row;
`
