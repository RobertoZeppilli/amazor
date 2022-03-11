import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartCard } from '../../components';

const ProductPage = () => {

  const productId = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct({
      id: productId,
      name: "test",
      description: "test description",
      price: 100.20
    })
  }, [])

  return (
    <div>
      Product Page: {product.name}
    </div>
  )
}

export default ProductPage