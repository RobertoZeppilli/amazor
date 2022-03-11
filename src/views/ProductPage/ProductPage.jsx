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

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}

export default ProductPage