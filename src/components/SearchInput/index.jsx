import React, { useEffect, useState } from 'react'
import Search, { SearchWrapper } from './sytles'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../store/actions'

const SearchBox = (props) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const searchProduct = (param) => {
    dispatch(getProducts(param))
  }

  useEffect(() => {
    if (query.length >= 1 && isNaN(query) === false) {
      searchProduct(Number(query))
    } else if (isNaN(query) && query.length > 1) {
      searchProduct(query)
    } else if (query.length === 0) {
      searchProduct()
    } else {
      searchProduct()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <SearchWrapper>
      <Search
        value={query}
        placeholder="Búsqueda rápida"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length === 0 ? (
        <i className="fas fa-search"></i>
      ) : (
        <i
          className="far fa-times-circle"
          onClick={() => {
            setQuery('')
            searchProduct()
          }}
        ></i>
      )}
    </SearchWrapper>
  )
}

export default SearchBox
