import React, { FC, useState } from 'react'
import { Character } from './Character/Character'
import { useQuery } from 'react-query'
import { api, geCharacterResponse } from '../api/rickAndMortyApi'
import { CharacterListStyle } from './ChareacterListStyle'

export const CharactersList = () => {

  const [page, setPage] = useState<number>(1)

  const { isLoading, isError, data, error } = useQuery<geCharacterResponse, Error>(
    ['persons', page],
    () => api.getPersons(page),
    {})

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

      <CharacterListStyle>
          {data?.results.map((character) => <Character character={character} key={character.id} />)}
      </CharacterListStyle>

    </>
  )
}


