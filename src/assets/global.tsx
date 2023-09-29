import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
 }

  #root, body {
    height: 100vh;
  } 

  // Use a lib clsx
  // classNames={clsx('rotate', menuCollapsed && 'active')}
  .rotate {
    transform: rotate(0deg);
    transition: transform 240ms ease-in-out;

    &.active {
      transform: rotate(180deg);
    }
  }

  .ps-collapsed{
    width: 57px;
    min-width: 25px;
  }

  .ps-sidebar-container{
    background-color: #fff !important;
  }
`;

export default GlobalStyle;