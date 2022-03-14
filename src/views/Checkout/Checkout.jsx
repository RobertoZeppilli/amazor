import React, { useState } from 'react'

import { getCartItemsID } from '../../utils/Cart'

const Checkout = () => {

    const cartData = getCartItemsID()
    const [articles, setArticles] = useState([])
    
    return (
        <div>
            Checkout

            <pre>
                {JSON.stringify(cartData, null, 2)}
            </pre>
        </div>
    )
}

export default Checkout