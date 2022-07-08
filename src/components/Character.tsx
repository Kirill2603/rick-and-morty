import React, { FC } from 'react'
import { CharacterType } from '../api/rickAndMortyApi'
import styled from 'styled-components'

type CharacterProps = {
  character: CharacterType
}

const CharacterStyle = styled.div`

`

export const Character:FC<CharacterProps> = ({character:
  {
    name,
    image,
    gender,
    type,
    species,
    status,
    location,
  }}) => {
  return (
    <CharacterStyle>
      <img src={image} alt='name' width={'200px'} height={'200px'} />
      <div>
        <p>{name}</p>
        <p>status : {status}</p>
        <p>gender :{gender}</p>
        <p>location :{location.name}</p>
        <p>{location.url}</p>
        <p>type: {type}</p>
        <p>species :{species}</p>
      </div>
    </CharacterStyle>
  )
}
