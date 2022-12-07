import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { dataGoodsFooter } from '../../../Data/dataSendGoodsFooter'

type Props = {}

const SendGoodsFooter = (props: Props) => {
    return (
        <Grid  display={'flex'} justifyContent={'space-between'}flexDirection={'row-reverse'} >
            {dataGoodsFooter.map(item => (
                <Grid key={item.id} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Grid>
                        <Image src={item.image} alt={item.title} width={100} height={100}/>
                    </Grid>
                    <Typography mb={1.5} sx={{fontSize:'16px',fontWeight:500}}>
                        {item.title}
                    </Typography>
                    <Typography width={{xs:'178px',md:'230px',lg:'250px'}} sx={{fontSize:'12px',color:'rgb(117,117,117)'}} textAlign={'center'}>
                         {item.Description}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}

export default SendGoodsFooter