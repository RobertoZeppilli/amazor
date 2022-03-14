import React, { useEffect, useState } from 'react'

import { getCartItemsID } from '../../utils/Cart'

const Checkout = () => {

    const [articles, setArticles] = useState([])
    const cartData = getCartItemsID()
    const totalPrice = articles.reduce((acc, article) => {
        return acc + (article.quantity * article.price)
    }, 0)

    const getCartFromServer = () => {

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartData)
        }).then(res => res.json())
            .then(body => setArticles(body))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getCartFromServer()
    }, [])


    return (
        <div>
            Checkout

            <pre>
                {JSON.stringify(articles, null, 2)}
            </pre>

            <div>
                Total: {totalPrice}
            </div>
        </div>
    )
}

export default Checkout