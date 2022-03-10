import React from 'react'

// material components
import { AppBar, IconButton, Toolbar, Typography, InputBase, Link } from '@material-ui/core'

// icons
import { Menu as MenuIcon, Search as SearchIcon, ShoppingCart } from "@material-ui/icons";


// styles
import "./CartAppBar.css"


const CartAppBar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Amazor
                    </Typography>
                    <div className="appbar__search">
                        <div className="appbar__search-icon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            className="appbar__search-input"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <ShoppingCart />
                </Toolbar>
            </AppBar>
            <div className="toolbar__category">
                <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
                <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
                <Link className="toolbar__category-item" href="/categories/1">Categoria 1</Link>
            </div>
        </>
    )
}

export default CartAppBar