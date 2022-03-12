import React, { useEffect, useState } from 'react'

// material components
import { Link } from 'react-router-dom'

// styles
import "./CategoriesToolbar.css"

const CategoriesToolbar = () => {

    const [categories, setCategories] = useState([])

    const getCategoriesFromServer = async () => {
        const categoriesFromServer = await fetch("http://localhost:5000/categories/2/related")
        const dataFromServer = await categoriesFromServer.json()
        setCategories(dataFromServer)
    }

    useEffect(() => {
        getCategoriesFromServer()
    }, [])

    const categoriesJSX = categories.map((category, index) => <Link key={`category-${index}`} className="toolbar__category-item" exact="true" to={category.link}>{category.name}</Link>)

    return (
        <div className="toolbar__category">
            {categoriesJSX}
        </div>
    )
}

export default CategoriesToolbar