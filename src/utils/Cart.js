function cartInit() {
    sessionStorage.clear()
    sessionStorage.setItem("cart", JSON.stringify({}));
}
function cartAddItem({ id }) {
    const cart = JSON.parse(sessionStorage.getItem("cart"))

    const cartIDs = Object.keys(cart)
    if (cartIDs.includes(id)) {
        cart[id] = cart[id] + 1
    } else {
        cart[id] = 1
    }
    sessionStorage.setItem("cart", JSON.stringify(cart))
}

function getCartItemsID() {
    const cart = JSON.parse(sessionStorage.getItem("cart"))

    return Object.keys(cart).map(id => {
        return { id, quantity: cart[id] }
    })
}

export { cartInit, cartAddItem, getCartItemsID }