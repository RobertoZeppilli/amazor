import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// material components
import { Grid } from '@material-ui/core'

// components
import { CartCard } from '../../components'

const CategorySummary = () => {
    const { category } = useParams()
    const [featureProducts, setFeatureProducts] = useState([])
    const [relatedCategories, setRelatedCategories] = useState([])

    const getFeturedProductsFromServer = async () => {

        try {
            const res = await Promise.all([
                fetch("http://localhost:5000/categories/2/featured"),
                fetch("http://localhost:5000/categories/2/related"),
            ]);
            const data = await Promise.all(res.map(r => r.json()))
            setFeatureProducts(data[0])
            setRelatedCategories(data[1])
        } catch (error) {
            console.error(error)
        }

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

    const relatedCategoriesJSX = relatedCategories.map((category, index) => (
        <li key={`category-${index}`}>
            <Link to={category.link}>{category.name}</Link>
        </li>
    ))

    return (
        <div>
            <Grid container spacing={3}>
                {featureProductsJSX}
            </Grid>
            <ul>
                {relatedCategoriesJSX}
            </ul>
        </div>
    )
}

export default CategorySummary