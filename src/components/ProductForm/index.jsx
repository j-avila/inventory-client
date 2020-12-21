import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Form, InputHolder } from './styles'

const ProductForm = (props) => {
  const [formData, setFormData] = useState({})

  const handleImg = (file) => {
    if (file === 'reset') {
      setFormData({
        ...formData,
        image: '',
        thumbnail: ''
      })
    } else {
      const { value, id, files } = file.target
      setFormData({
        ...formData,
        [id]: files[0],
        thumbnail: URL.createObjectURL(files[0])
      })
    }
  }

  const handleChange = (e) => {
    const { value, id } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const saveForm = () => {
    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      }
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <Wrapper>
      <strong>Agregar nuevo producto</strong>
      <Form>
        <InputHolder>
          <label>imagen del producto</label>
          <div className="file-input">
            <span className="thumb">
              {formData.thumbnail ? (
                <>
                  <i
                    className="fas fa-times-circle"
                    onClick={(e) => handleImg('reset')}
                  ></i>
                  <img src={formData.thumbnail} alt="thumb" />
                </>
              ) : (
                <img
                  src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
                  alt="thumb"
                />
              )}
            </span>
            <input
              type="file"
              id="image"
              onChange={(e) => handleImg(e)}
              placeholder="imagen"
            />
          </div>
        </InputHolder>
        <InputHolder>
          <label>nombre del producto</label>
          <input
            type="text"
            id="name"
            onChange={(e) => handleChange(e)}
            placeholder="ejem: polera azul"
          />
        </InputHolder>
        <InputHolder>
          <label>marca</label>
          <input
            type="text"
            id="brand"
            onChange={(e) => handleChange(e)}
            placeholder="ejem: nike"
          />
        </InputHolder>
        <InputHolder>
          <label>categoría del producto</label>
          <input
            type="text"
            id="category"
            onChange={(e) => handleChange(e)}
            placeholder="ejem: ropa de hombre"
          />
        </InputHolder>
        <InputHolder>
          <label>precio unitario</label>
          <input
            type="number"
            min="0"
            id="price"
            onChange={(e) => handleChange(e)}
            placeholder="999"
          />
        </InputHolder>
        <InputHolder>
          <label>descrpción del producto</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            placeholder="ejem: polera azul sin mangas"
          ></textarea>
        </InputHolder>
        <button onClick={() => saveForm()}>enviar</button>
      </Form>
    </Wrapper>
  )
}

ProductForm.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  brand: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string
}

export default ProductForm
