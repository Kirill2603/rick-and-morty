import { createGlobalStyle } from 'styled-components'
import Font from '../assets/get_schwifty.ttf'

type GlobalStyles = {
  theme: 'dark' | 'light'
}

export const GlobalTheme = createGlobalStyle<GlobalStyles>`
  // @font-face {
  //   font-family: Get Schwifty;
  //   src: url(${Font});
  // }

  * {
    margin: 0;
    padding: 0;
    // color: ${props => props.theme === 'dark' ? '#ffffff' : '#202329'};
  }

  body {
    background-color: #f5f6fa;
  }
  
  //h1 {
  //  font-size: 8rem;
  //  color: #86f601;
  //}
  
  // body {
  //   background-color: ${props => props.theme === 'dark' ? '#202329' : '#ffffff'};
  // }
`
