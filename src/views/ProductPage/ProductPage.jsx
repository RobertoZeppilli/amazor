import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// material components
import { Box, Tab, Tabs } from '@material-ui/core';

// ui
import { TabPanel, a11yProps } from './tab-panel'


const ProductPage = () => {

  const productId = useParams()
  const [product, setProduct] = useState({})
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProductFromServer = async () => {
    const productFromServer = await fetch("http://localhost:5000/products/2")
    const dataFromServer = await productFromServer.json()
    return setProduct(dataFromServer[0])
  }

  const tabDetailsKeysJSX = product && product?.details && Object.keys(product?.details).map((tab, index) => (
    <Tab key={`tab-${index}`} label={tab} {...a11yProps(index)} />
  ))

  const tabContentJSX = product && product?.details && Object.keys(product?.details).map((content, index) => (<TabPanel key={`content-${index}`} value={value} index={index}>
    {product?.details[content]}
  </TabPanel>))

  useEffect(() => {
    getProductFromServer()
  }, [])


  return (
    <div>
      Product Page: {product.name}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabDetailsKeysJSX}
        </Tabs>
      </Box>

      {tabContentJSX}
    </div>
  )
}

export default ProductPage