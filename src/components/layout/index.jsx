import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchInput'
import InventoryBox from '../InventoryBox'
import { ToolBar, Wrapper, Button } from './styles'
import { getProducts } from '../../store/actions'
import { useDispatch } from 'react-redux'
import ProductForm from '../ProductForm'

const Layout = (props) => {
  const dispatch = useDispatch()
  const [openForm, setOpen] = useState(false)

  const fetchProducts = () => {
    dispatch(getProducts())
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Wrapper>
      <h1>Inventario</h1>
      <ToolBar>
        <Button onClick={() => setOpen(!openForm)}>
          Agregar item <i className="fas fa-plus"></i>
        </Button>
        <SearchBox />
      </ToolBar>
      {openForm && <ProductForm />}
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
