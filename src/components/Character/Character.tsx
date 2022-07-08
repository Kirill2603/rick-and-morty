import React, { FC } from 'react'
import { CharacterType } from '../../api/rickAndMortyApi'
import { CharacterStyle } from './CharacterStyle'

type CharacterProps = {
  character: CharacterType
}

export const Character:FC<CharacterProps> = ({character:
  {
    name,
    image,
    gender,
    type,
    species,
    status,
    location,
    episode
  }}) => {
  return (
    <CharacterStyle>
      <div>
        <img src={image} alt='name' width={'200px'} height={'200px'} />
      </div>
       <div>
        <p>{name}</p>
        <div>{status} - {gender}</div>
        <p>Last known location: {location.name}</p>
        <p>Episodes</p>
      </div>
    </CharacterStyle>
  )
}
