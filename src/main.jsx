import React from 'react'
import ReactDOM from 'react-dom/client'
import CadastroVeiculo from './pages/CadastroVeiculo.jsx'
import { GlobalStyle } from './styles/GlobalStyle.styles.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <CadastroVeiculo/>
    </ThemeProvider>
  </React.StrictMode>,
)
