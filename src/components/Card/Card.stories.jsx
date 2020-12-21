import React from 'react'
import Card from './index'

export default {
  title: 'Card',
  component: Card
}

export const CardExample = () => (
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
)

const product = {
  aviable: true,
  _id: '5fdea1c39af81d2dd8a807a9',
  sku: 12,
  name: 'ihpone 12',
  uniPrice: 1999,
  brand: 'apple',
  image:
    'https://cdn.shopify.com/s/files/1/0426/2864/5025/products/iphone-12-blue-select-2020.png?v=1604962750',
  description: 'latest iphone, the same shit with a better cammera'
}
