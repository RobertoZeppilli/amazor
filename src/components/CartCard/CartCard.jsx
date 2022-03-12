import React from 'react'

// material components
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'

// styles
import "./CartCard.css"

const CartCard = ({ title, actionTitle, actionLink, children }) => {

    const actions = actionTitle && (<CardActions>
        <Button size="small">
            <Link exact="true" to={actionLink}>{actionTitle}</Link>
        </Button>
    </CardActions>)

    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="div">
                    {children}
                </Typography>
            </CardContent>
            {actions}
        </Card>
    )
}

export default CartCard