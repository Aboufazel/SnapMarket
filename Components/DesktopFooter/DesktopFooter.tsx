import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BottomFooter from './BottomFooter/BottomFooter'
import SendGoodsFooter from './SendGoodsFooter/SendGoodsFooter'
import ApplicationFooter from './WebsiteApplicationFooter/ApplicationFooter'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
type Props = {}

const DesktopFooter = (props: Props) => {
    return (
       <Grid width={"auto"} bgcolor={"common.white"} pt={2} mt={3} display={{xs:'none',sm:'flex'}}>
         <Container>
            <SendGoodsFooter />
            <ApplicationFooter />
            <BottomFooter />
        </Container>
       </Grid>
    )
}

export default DesktopFooter