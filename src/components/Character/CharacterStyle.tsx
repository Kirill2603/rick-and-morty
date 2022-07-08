import styled from 'styled-components'

export const CharacterStyle = styled.article`
  width: 500px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: #353b48;
  border-radius: 0.5rem;
  margin: 0.75rem;
  color: #e1b12c;
  font-size: 20px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  :hover {
    box-shadow: 0px 0px 30px 13px rgba(134, 246, 1, 0.43);
  }

  div {
    flex: 2 1 0%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      margin: 0px;
      opacity: 1;
      transition: opacity 0.5s ease 0s;
      object-position: center center;
      object-fit: cover;
    }
  }

`
