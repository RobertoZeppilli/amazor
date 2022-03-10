import React from 'react'

// material components
import { InputBase } from '@material-ui/core'

// icons
import { Search as SearchIcon } from "@material-ui/icons";

// styles
import "./AppBarInput.css"

const AppBarInput = () => {
    return (
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
    )
}

export default AppBarInput