import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    background:${({ theme }) => theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    
  }
  
  a, 
  a:visited{
    text-decoration: none;    
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }
`

export default GlobalStyle
