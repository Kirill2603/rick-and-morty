import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/File-01.svg'

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #202329;

  svg {
    width: 60px;
    height: 60px;
  }
  svg > path {
    fill: #86f601;
  }

  img {
    width: 40px;
    height: 40px;
    color: white;
  }
`

const Button = styled.button`
  background-color: #86f601;
  border-radius: 5px;
  padding: 0.5em 2em 0.5em 2em ;
  font-weight: bold;
  font-size: 20px;  
  :hover {
    border-radius: 10px;
  }
`

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo fill={'#dddddd'}/>
      <Button>123</Button>
    </HeaderStyle>
  )
}
