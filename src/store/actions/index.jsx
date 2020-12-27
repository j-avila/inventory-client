import Axios from 'axios'
import * as type from '../reducers/types'

// bad practice i know but for time saving...
const productionUrl = 'http://localhost:3000'
console.log(process.env.REACT_APP_DEV_API_URL)

const options = {
  mode: 'cors',
  cache: 'default',
  'Content-Type': 'application/json'
}

export const getProducts = (param) => async (dispatch) => {
  const urlAttr = `${productionUrl}/products?${`name=${
    param && param.length >= 1 ? param : ''
  }`}`
  const urlSku = `${productionUrl}/products/sku?${`sku=${param}`}`

  return Axios.get(typeof param === 'number' ? urlSku : urlAttr, options).then(
    ({ data }) => {
      dispatch({
        type: type.FETCH_DATA,
        payload: data.product
      })
    }
  )
}
