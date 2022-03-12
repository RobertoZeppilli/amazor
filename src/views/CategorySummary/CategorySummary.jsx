import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// material components
import { Grid } from '@material-ui/core'

// components
import { CartCard } from '../../components'

const CategorySummary = () => {
    const { category } = useParams()
    console.log(category)
    const [featureProducts, setFeatureProducts] = useState([])

    const getFeturedProductsFromServer = async () => {
        const dataFromServer = await fetch("http://localhost:5000/categories/2/featured")
        const resFromServer = await dataFromServer.json()
        setFeatureProducts(resFromServer)
    }

    useEffect(() => {
        getFeturedProductsFromServer()
    }, []);

    const featureProductsJSX = featureProducts.map((product) =>
    (<Grid item xs key={product.id}>
        <CartCard
            title={product.name}
            actionTitle="dettaglio"
            actionLink={`/products/${product.id}`}>
            <p>{product.description}</p>
            <small>{product.price}</small>
        </CartCard>
    </Grid>))

    return (
        <div>
            <Grid container spacing={3}>
                {featureProductsJSX}
            </Grid>
        </div>
    )
}

export default CategorySummary