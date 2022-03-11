import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// material components
import { Grid } from '@material-ui/core'

// components
import { CartCard } from '../../components'

const CategorySummary = () => {
    const { category } = useParams()
    const [featureProducts, setFeatureProducts] = useState([])

    useEffect(() => {
        setFeatureProducts([{
            id: 1,
            name: "Computer",
            description: "descrizione",
            price: 769.89
        }, {
            id: 2,
            name: "Computer",
            description: "descrizione",
            price: 769.89
        }, {
            id: 3,
            name: "Computer",
            description: "descrizione",
            price: 769.89
        }, {
            id: 4,
            name: "Computer",
            description: "descrizione",
            price: 769.89
        }, {
            id: 5,
            name: "Computer",
            description: "descrizione",
            price: 769.89
        },])
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