import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Header } from './components/header/Header'
import { GlobalTheme } from './externalStyles/GlobalTheme'
import { CharactersList } from './components/CharactersList'

const queryClient = new QueryClient()

export function App() {

  const [theme, setTheme] = useState<'dark' | 'light'>('light')



  return (
    <QueryClientProvider client={queryClient}>
      <Header theme={theme} setTheme={setTheme}/>
      {/*<h1>The Rick and Morty</h1>*/}
      <GlobalTheme theme={theme} />

      <CharactersList />
    </QueryClientProvider>
  )
}

