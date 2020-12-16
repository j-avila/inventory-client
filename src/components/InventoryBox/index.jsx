import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import { Wrapper } from './styles'
import { ReactComponent as NotFound } from '../assets/404.svg'
import { FourOfour } from '../Card/styles'

const Inventory = (props) => {
  const [inventory, setInventory] = useState([])
  const products = useSelector((state) => state.products.data)

  useEffect(() => {
    setInventory(products)
  }, [products])

  return (
    <Wrapper>
      {inventory && inventory.length >= 1 ? (
        inventory.map((product) => (
          <Card
            key={product.sku}
            name={product.name}
            category={product.category}
            sku={product.sku}
            description={product.description}
            price={product.uniPrice}
            brand={product.brand}
            image={product.image}
          />
        ))
      ) : (
        <FourOfour>
          <NotFound style={{ width: '100%', margin: '0 auto' }} />
          <h1>nothing here</h1>
          <span>try another search</span>
        </FourOfour>
      )}
    </Wrapper>
  )
}

export default Inventory
