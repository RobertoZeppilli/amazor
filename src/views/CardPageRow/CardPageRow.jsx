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
                    title="product 1"
                    actionTitle="info"
                    actionLink="#info"
                >
                    <b>ciao</b>
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
                    title="product 3"
                />
            </Grid>
            <Grid item xs>
                <CartCard
                    title="product 4"
                />
            </Grid>
        </Grid>
    )
}

export default CardPageRow