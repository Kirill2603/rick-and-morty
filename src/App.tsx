import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { api, geCharacterResponse } from './api/rickAndMortyApi'
import { Character } from './components/Character'
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/Header'
import Font from './assets/get_schwifty.ttf'

const queryClient = new QueryClient()

type GlobalStyles = {
  theme: 'dark' | 'light'
}

const GlobalTheme = createGlobalStyle<GlobalStyles>`
  @font-face {
    font-family: Get Schwifty;
    src: url(${Font});
  }

  * {
    font-family: Get Schwifty, Arial, SansSerif;
    margin: 0;
    padding: 0;
  }

  body {


    background-color: ${props => props.theme === 'dark' ? '#202329' : '#ffffff'};
  }
`

export function App() {

  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  console.log(theme)

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme</button>
      <GlobalTheme theme={theme} />
      <Persons />
    </QueryClientProvider>
  )
}

function Persons() {

  const [page, setPage] = useState<number>(1)

  const { isLoading, isError, data, error } = useQuery<geCharacterResponse, Error>(
    ['persons', page],
    () => api.getPersons(page),
    { keepPreviousData: true })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  return (
    <>
      <div>Persons :</div>
      <div>Find {data?.info.count} persons</div>
      <div>{data?.info.pages} pages</div>
      <div>
        Page: {page}
        <button onClick={(event) => {
          setPage(page - 1)
        }}>{'<--'}</button>
        <button onClick={(event) => {
          setPage(page + 1)
        }}>{'-->'}</button>
      </div>
      {data?.results.map((character) => <Character character={character} key={character.id} />)}
    </>
  )
}
