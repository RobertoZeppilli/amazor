import React from 'react'

// material components
import { Link } from 'react-router-dom'

// styles
import "./CategoriesToolbar.css"

const CategoriesToolbar = () => {
    return (
        <div className="toolbar__category">
            <Link className="toolbar__category-item" exact="true" to="/categories/1">Categoria 1</Link>
            <Link className="toolbar__category-item" exact="true" to="/categories/1">Categoria 1</Link>
            <Link className="toolbar__category-item" exact="true" to="/categories/1">Categoria 1</Link>
        </div>
    )
}

export default CategoriesToolbar