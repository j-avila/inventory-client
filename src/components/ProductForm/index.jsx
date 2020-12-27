import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Form, InputHolder } from './styles'

const ProductForm = (props) => {
  const [thumbnail, setThumbnail] = useState({})
  const form = useRef(null)

  const handleImg = (file) => {
    if (file === 'reset') {
      setThumbnail({
        thumbnail: ''
      })
    } else {
      const { files } = file.target
      setThumbnail({
        thumbnail: URL.createObjectURL(files[0])
      })
      console.log(files[0])
    }
  }

  const saveForm = (e) => {
    e.preventDefault()
    console.log(form.current)
    let formdata = new FormData(form.current)

    fetch(`http://localhost:3000/products`, {
      method: 'POST',
      body: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
        mode: 'cors'
      }
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <Wrapper>
      <strong>Agregar nuevo producto</strong>
      <Form ref={form} enctype="multipart/form-data" onSubmit={saveForm}>
        <InputHolder>
          <label>imagen del producto</label>
          <div className="file-input">
            <span className="thumb">
              {thumbnail.thumbnail ? (
                <>
                  <i
                    className="fas fa-times-circle"
                    onClick={(e) => handleImg('reset')}
                  ></i>
                  <img src={thumbnail.thumbnail} alt="thumb" />
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
              name="image"
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
            name="name"
            placeholder="ejem: polera azul"
          />
        </InputHolder>
        <InputHolder>
          <label>marca</label>
          <input type="text" id="brand" name="brand" placeholder="ejem: nike" />
        </InputHolder>
        <InputHolder>
          <label>categoría del producto</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="ejem: ropa de hombre"
          />
        </InputHolder>
        <InputHolder>
          <label>precio unitario</label>
          <input
            type="number"
            min="0"
            name="uniPrice"
            id="price"
            placeholder="999"
          />
        </InputHolder>
        <InputHolder>
          <label>descrpción del producto</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            name="description"
            placeholder="ejem: polera azul sin mangas"
          ></textarea>
        </InputHolder>
        <button type="submit">enviar</button>
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
