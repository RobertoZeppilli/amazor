import React from 'react'

// material components
import { Link } from '@material-ui/core'

// styles
import "./CategoriesToolbar.css"

const CategoriesToolbar = () => {
    return (
        <div className="toolbar__category">
            <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
            <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
            <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
        </div>
    )
}

export default CategoriesToolbar