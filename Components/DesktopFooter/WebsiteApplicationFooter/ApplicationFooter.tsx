import { Grid, Typography } from '@mui/material'
import { padding, style } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { dataApplicationFooter } from '../../../Data/DataSendGoodsFooter'

type Props = {}

const ApplicationFooter = (props: Props) => {
    return (
        <Grid pb={6} sx={{ direction: 'rtl' }} container justifyContent={'space-between'}>
            <Grid sx={{display:"flex" , justifyContent:"space-between"}}>
                <Grid pl={{sm:"10px" , md:"80px" , lg:"260px"}} container display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Grid display={'flex'} flexDirection={'column'}>
                        <Typography fontSize={{sm:'1.4rem' , md:"1.6rem"}} variant='h3'>{'دانلود اپلیکیشن'}</Typography>
                        <Typography fontSize={{sm:'1.2rem' , md:"1.4rem"}} py={2} pb={2.5} variant='subtitle1'>{'اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز مشاهده کنید'}</Typography>
                    </Grid>
                    <Grid width={{sm:118 , lg:151}} height={{sm:35 , lg:45}} sx={{display:"flex"}} gap={0.75}>
                        {dataApplicationFooter.slice(0, 4).map(item => (
                            <Image key={item.id} src={item.image} alt={item.title} style={{width:"100%" , height:"100%"}} />
                        ))}
                    </Grid>
                </Grid>
                <Grid pt={3}  width={{sm:"200px" , md:"260px"}} height={{sm:"170px" , md:"180px"}}sx={{display:"flex"}}>
                    {dataApplicationFooter.slice(4, 7).map(item => (
                        <Image style={{width:"100%" , height:"100%"}} key={item.id} src={item.image} alt={item.title}/>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ApplicationFooter