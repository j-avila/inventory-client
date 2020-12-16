import styled from 'styled-components'

const CardWrapper = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0.5rem;
  flex-basis: 150px;
  flex-grow: 2;
  box-shadow: 0px 3px 5px rgba(176, 190, 197, 0.32);
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  .brand {
    padding: 6px 8px;
    background: #b3b3b3;
    border-radius: 5px;
    font-size: x-small;
    color: white;
    margin-bottom: 1rem;
  }
  strong {
    font-weight: bold;
    font-size: large;
    display: block;
    margin: 12px 0 0 0;
  }
  .price {
    margin-bottom: 8px;
    &.discounted {
      opacity: 0.3;
      text-decoration: line-through;
    }
  }
  .catname {
    display: block;
    color: #a0a0a0;
    font-size: small;
    margin: 6px 0 12px 0;
  }
  .desc {
    color: #a0a0a0;
    line-height: 1.5rem;
    text-overflow: ellipsis;
  }
  .badge {
    display: inline-block;
    background: #582a7a;
    color: white;
    border-radius: 20px;
    margin: 0 12px;
    padding: 6px 8px;
    font-weitgth: bold;
    font-size: small;
  }
`

export const FourOfour = styled.div`
  width: 100%;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
  h1 {
    text-transform: capitalize;
    margin: 1rem auto;
  }
`

export default CardWrapper
