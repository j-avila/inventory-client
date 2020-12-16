import React, { useEffect } from 'react'
import SearchBox from '../SearchInput'
import InventoryBox from '../InventoryBox'
import { Wrapper } from './styles'
import { getProducts } from '../../store/actions'
import { useDispatch } from 'react-redux'

const Layout = (props) => {
  const dispatch = useDispatch()

  const fetchProducts = () => {
    dispatch(getProducts())
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Wrapper>
      <h1>Inventario</h1>
      <SearchBox />
      <InventoryBox />
      <footer>
        <a href="mailto:jose.leon.avila@gmail.com">
          made with <span>🍻</span> - ©jose avila 2020
        </a>
      </footer>
    </Wrapper>
  )
}

Layout.propTypes = {}

export default Layout
