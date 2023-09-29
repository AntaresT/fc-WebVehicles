import styled from "styled-components";

export const Container = styled.section`
  background: var(--mono-white, #FFF);
  border-radius: 8px;
  border: 1px solid var(--neutrals-neutral-8, #EFEFEF);
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
`

export const Title = styled.title`
  color: var(--secondary-blue-5, #1D2C4B);
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.35px;
  margin: 16px 0px 16px 16px;
`

export const Divider = styled.div`
  background: var(--neutrals-neutral-8, #EFEFEF);
  height: 1px;
  flex-shrink: 0;
  width: 100%;
`

export const TabsWrapper = styled.section`
  padding: 0px 32px;
`
