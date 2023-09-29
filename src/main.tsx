import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarsProvider } from './provider/CarsContext.tsx'
import GlobalStyle from './assets/global.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './Pages/List/index.tsx'
import Details from './Pages/Details/index.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0065FF'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarsProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/:id" element={<Details />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </ThemeProvider>
      </CarsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
