import React from 'react'

// material components
import { AppBar, IconButton, Toolbar, Typography, Link } from '@material-ui/core'

// icons
import { Menu as MenuIcon, ShoppingCart } from "@material-ui/icons";

// components
import { AppBarInput, CategoriesToolbar } from '../index'

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

                    <AppBarInput />

                    <ShoppingCart />

                </Toolbar>
            </AppBar>

            <CategoriesToolbar/>
        </>
    )
}

export default CartAppBar