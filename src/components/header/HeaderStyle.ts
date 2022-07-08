import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #4cd137;
  
  svg {
    width: 80px;
    height: 80px;

    > path {
      fill: #000000;
    }
  }
  
  nav {
    
    img {
      width: 40px;
      height: 40px;
      color: white;
    }
    ul {
      li {
        list-style: none;
      }
    }
  }
`
