import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
type Props = {
    title: string,
    dis: string,
    top: string,
    bgcolor: string,

}

const CardStore = ({ title, dis, top, bgcolor }: Props) => {
    return (
        <Grid zIndex={-1000} position={'absolute'} top={top} right={'0px'} left={'0px'} mt={'-14rem'} height={125} bgcolor={'common.white'} borderRadius={'0.5rem'} boxShadow={1} display={'flex'} justifyContent={'space-between'} p={'6.6rem 1rem 1.6rem'}>
            <Grid display={'flex'} gap={1} flexDirection={'column'}>
                <Typography fontSize={'1.2rem'}>{title}</Typography>
                <Typography fontSize={'1.2rem'} color={'rgb(26, 28, 35)'}>{dis}</Typography>
            </Grid>
            <Grid width={'35%'}  display={'flex'} justifyContent={'flex-end'}>
                <ButtonProductCardSwiper  title={'شروع خرید '}icon={<ArrowBackIosNewIcon/>}bgcolor={bgcolor} />
               
            </Grid>
        </Grid>
    )
}

export default CardStore