import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Colors.styled'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from './features/api/apiSlice'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
)
