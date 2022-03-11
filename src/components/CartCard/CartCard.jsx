import React from 'react'

// material components
import { Button, Card, CardActions, CardContent, CardHeader, Link, Typography } from '@material-ui/core'

// styles
import "./CartCard.css"

const CartCard = ({ title, actionTitle, actionLink, children }) => {

    console.log(children)
    const actions = actionTitle && (<CardActions>
        <Button size="small">
            <Link href={actionLink}>{actionTitle}</Link>
        </Button>
    </CardActions>)

    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {children}
                </Typography>
            </CardContent>
            {actions}
        </Card>
    )
}

export default CartCard