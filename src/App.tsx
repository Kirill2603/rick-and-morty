import React, { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { api, getPersonsResponse } from './api/rickAndMortyApi'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Persons />
    </QueryClientProvider>
  )
}

function Persons() {

  const [page, setPage] = useState<number>(1)

  const { isLoading, isError, data, error, } = useQuery<getPersonsResponse, Error>(
    ['persons', page],
    () => api.getPersons(page),
    { keepPreviousData : true })

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

      <input type='number' value={page} onChange={(event) => {setPage(Number(event.target.value))}}/> <button>go to</button>

      {data?.results.map(({ id, name, image, status }) =>
        <div key={id}>
          <img src={image} alt='name' />
          <p>{name}</p>
          <p>status : {status}</p>
        </div>)}
    </>


  )
}
