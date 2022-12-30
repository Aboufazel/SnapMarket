import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { dataGoodsFooter } from '../../../Data/DataSendGoodsFooter'

type Props = {}

const SendGoodsFooter = (props: Props) => {
    return (
        <Grid display={'flex'} justifyContent={'space-between'} pb={2}>
            {dataGoodsFooter.map(item => (
                <Grid key={item.id} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Grid>
                        <Image src={item.image} alt={item.title} width={75} height={75} />
                    </Grid>
                    <Grid sx={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                        <Typography mb={0.75} fontSize={{sm:'1.4rem' , md:"1.6rem"}} variant="h3">
                            {item.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography textAlign={"center"} maxWidth={160} variant='subtitle1'>
                            {item.Description}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default SendGoodsFooter