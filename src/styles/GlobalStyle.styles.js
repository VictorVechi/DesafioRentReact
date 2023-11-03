import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html,
:root {
  width: 100%;
  min-height: 100vh;
  
}

::-webkit-scrollbar {
  display: none;
}

button,
a {
  cursor: pointer;
}

a, li, p{
  text-decoration: none;
  list-style: none;
  color: inherit;
  font-family: 'Montserrat', sans-serif;
}
label {
  font-family: 'Montserrat', sans-serif;
  color: #263238;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
button,
input {
  outline: none;
  font-family: 'Montserrat', sans-serif;
}


h1, h2{
  font-family: 'Montserrat', sans-serif;
  font-size: 38px;
}
`