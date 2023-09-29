import styled from "styled-components";

export const Container = styled.section`
  background: var(--mono-white, #FFF);
  border-radius: 8px;
  border: 1px solid var(--neutrals-neutral-8, #EFEFEF);
  margin-top: 24px;
  overflow: hidden;
  width: 100%;
`

export const PaginationContainer = styled.section`
  align-items: center;
  display: flex;
  padding: 10px 0 10px 0;
  justify-content: space-between;
`

export const RowsTable = styled.section`
  align-items: center;
  display: flex;
  padding-right: 16px;
`

export const P = styled.p`
  color: var(--neutrals-neutral-6, #A3A3A3);
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.3px;
  margin-right: 16px;
`

export const Select = styled.select`
  background: var(--mono-white, #FFF); 
  border-radius: 6px;
  border: 1px solid var(--neutrals-neutral-7, #D1D1D1);
  flex-shrink: 0; 
  height: 28px;
  text-align: center;
  width: 40px;
`

export const TableTitle = styled.p`
  color: var(--neutrals-neutral-6, #A3A3A3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.35px; 
`

export const TableText = styled.p`
  color: var(--secondary-blue-5, #1D2C4B);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  letter-spacing: -0.35px; 
`
