import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  background: #dcd7d7;
  border-radius: 8px;
`
export const Form = styled.form`
  display: grid;
`
export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label {
    font-weight: bold;
    font-size: small;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    padding: 8px 10px;
    border-radius: 6px;
    border: 1px solid grey;
    &:focus {
      border: 1px solid #582a7a;
    }
  }
  .file-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    .thumb {
      width: 100%;
      max-width: 80px;
      margin-right: 20px;
      overflow: hidden;
      background: #00808030;
      border-radius: 6px;
      padding: 8px;
      position: relative;
      i {
        position: absolute;
        right: 8px;
        bottom: 8px;
        color: tomato;
        &:hover {
          cursor: pointer;
          color: black;
        }
      }

      img {
        width: 100%;
      }
    }
    input[type='file'] {
      background: #00808030;
      color: white;
      border: 0;
    }
  }
`
