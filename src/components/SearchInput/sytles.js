import styled from 'styled-components'

const Search = styled.input`
  padding: 1rem 2rem;
  font-size: 14px;
  width: calc(100% - 4rem);
  display: block;
  border: none;
  border-radius: 8px;
  transition: 1s all ease-in-out;
  &:focus {
    border: 1px solid #b3b3b3;
    transition: 1s all ease-in-out;
    box-shadow: 0px 3px 15px rgba(176, 190, 197, 0.32);
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  .fas,
  .far {
    position: absolute;
    right: 20px;
    margin: auto;
    top: 18px;
    bottom: 0;
    &.fa-times-circle {
      color: tomato;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export default Search
