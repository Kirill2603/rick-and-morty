import axios from 'axios'

export type geCharacterResponse = {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string | null,
  },
  results: CharacterType[]
}

export type CharacterType = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

const apiInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})

export const api = {
 async getPersons(page: number, ) {
    const {data} = await apiInstance.get<geCharacterResponse>('character/', {
      params: {page}
    })
    return data
  }
}
