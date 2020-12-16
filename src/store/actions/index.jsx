import Axios from 'axios'
import * as type from '../reducers/types'

// bad practice i know but for time saving...
const productionUrl =
  'http://ec2-44-241-233-87.us-west-2.compute.amazonaws.com:3000'

const options = {
  mode: 'cors',
  cache: 'default',
  'Content-Type': 'application/json'
}

export const getProducts = (param) => async (dispatch) => {
  console.log('tipo:', typeof param)

  const urlAttr = `${productionUrl}/products?${`name=${
    param && param.length >= 1 ? param : ''
  }`}`
  const urlSku = `${
    process.env.REACT_APP_API_URL
  }/products/sku?${`sku=${param}`}`

  return Axios.get(typeof param === 'number' ? urlSku : urlAttr, options).then(
    ({ data }) => {
      dispatch({
        type: type.FETCH_DATA,
        payload: data.product
      })
    }
  )
}
