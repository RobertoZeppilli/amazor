import React from 'react'

// material components
import { Grid } from '@material-ui/core'

// components
import { CartCard } from '../../components'

// styles
import "./CardPageRow.css"

const CardPageRow = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
                <CartCard
                    title="Segui i trend del momento"
                    actionTitle="Più info"
                    actionLink="#"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T5FGoNVUgWNoLrb46sLjNc3e3GPCVjqQbfQntF-a5hHyU1Izb3Yj1JbEO2JIYuxiLVw&usqp=CAU" alt="shipping" />
                </CartCard>
            </Grid>
            <Grid item xs>
                <CartCard
                    title="Servizi di spedizione in tutto il mondo"
                    actionTitle="Scopri le condizioni"
                    actionLink="#"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T5FGoNVUgWNoLrb46sLjNc3e3GPCVjqQbfQntF-a5hHyU1Izb3Yj1JbEO2JIYuxiLVw&usqp=CAU" alt="shipping" />
                </CartCard>
            </Grid>
            <Grid item xs>
                <CartCard
                    title="Scopri le nuove offerte"
                    actionTitle="Sbrigati!"
                    actionLink="#"
                >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T5FGoNVUgWNoLrb46sLjNc3e3GPCVjqQbfQntF-a5hHyU1Izb3Yj1JbEO2JIYuxiLVw&usqp=CAU" alt="shipping" />
                </CartCard>
            </Grid>
            <Grid item xs>
                <CartCard
                    title="Libri Best Seller"
                    actionTitle="Vedi la classifica"
                    actionLink="#"
                >
                    <img src="https://www.viverediscrittura.it/VDS/wp-content/uploads/2018/02/Come-scrivere-un-best-seller.jpg" alt="best seller libri" />
                </CartCard>
            </Grid>
        </Grid>
    )
}

export default CardPageRow