import React from 'react'

// components
import { CartCard } from '../../components'

// styles
import "./CardPageRow.css"

const CardPageRow = () => {
    return (
        <div>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
        </div>
    )
}

export default CardPageRow