import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 80vh;
  margin: 5vh auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background: #f3f3f3;
  border-radius: 2px;
  h1 {
    font-weight: 900;
    text-align: center;
    font-size: xx-large;
  }
  footer {
    text-align: center;
    margin: 1rem auto;
    a {
      color: #a0a0a0;
      text-decoration: none;
      transition: 0.5s all ease;
      span {
        transition: 0.5s all ease;
      }
      &:hover {
        transition: 0.5s all ease;
        color: black;
      }
    }
  }
`

export const Button = styled.button`
  dispaly: block;
  padding: 1rem 1rem;
  background: #582a7a;
  color: white;
  border: 0;
  outline: 0;
  border-radius: 8px;
  transition: 0.5s ease all;
  max-width: max-content;
  &:hover {
    cursor: pointer;
    transition: 0.5s ease all;
    background: #321846;
  }
`

export const ToolBar = styled.div`
  margin: 1rem auto;
  display: grid;
  column-gap: 10px;
  grid-template-columns: 2fr 8fr;
  align-items: center;
`
