import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  'Roboto', sans-serif;
}

html,
:root {
  width: 100%;
  min-height: 100vh;
}

button,
a {
  cursor: pointer;
}

a, li, p{
  text-decoration: none;
  list-style: none;
  color: inherit;
  font-family: 'Roboto Slab', serif;
}
label {
  font-family: 'Roboto Slab', serif;
  color: #263238;
  font-style: normal;
  font-weight: 300;
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