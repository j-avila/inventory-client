import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardWrapper from './styles'
import palindrome from '../../helplers/palindrome'
import getPercentage from '../../helplers/getPercentage'

const Card = (props) => {
  const { sku, description, image, category, name, price, brand } = props
  const [discount, setDiscount] = useState(false)

  useEffect(() => {
    if (palindrome(brand) || palindrome(name) || palindrome(description)) {
      setDiscount(true)
    }
  }, [])

  return (
    <CardWrapper id={sku}>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img
          src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
          alt={name}
        />
      )}
      <div>
        <span className="brand">{brand}</span>
        <strong>{name}</strong>
        <i className="catname">{category}</i>
        {discount && (
          <span className="price">{`$${getPercentage(20, price)}`}</span>
        )}
        {discount && <span className="badge">20% desc.</span>}
        <p className={`price ${discount ? 'discounted' : ''}`}>{`$${price}`}</p>
        <p className="desc">{description}</p>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  sku: PropTypes.number,
  brand: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
}

export default Card
