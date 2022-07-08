import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/File-01.svg'
import { HeaderStyle } from './HeaderStyle'

const Button = styled.button`
  border-radius: 5px;
  padding: 0.5em 2em 0.5em 2em ;
  font-weight: bold;
  font-size: 20px;  
  :hover {
    border-radius: 10px;
  }
`

type HeaderProps = {
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
}

export const Header: FC<HeaderProps> = ({theme, setTheme}) => {
  return (
    <HeaderStyle>
      <Logo/>
      <nav>
        <ul>
          <li>
            <a href=''>Characters</a>
            <a href=''>Locations</a>
            <a href=''>Episodes</a>
          </li>
        </ul>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>☼</Button>
      </nav>
    </HeaderStyle>
  )
}
