import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";


const CardProductSwiper = ({ bottom, left, title, image, Price, Weight, priceReduction, Discount, width, titleBtn, heightImage, widthImage }: dataCardSliderType) => {
  const styling = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100px', 
  }
return (
  <Grid display='flex' gap={2} width={width} sx={{ cursor: "pointer" }}  >
    <Grid position={'relative'} bgcolor={'common.white'} borderRadius={'0.5rem'} width={234}  >
      <Grid display='flex' justifyContent={'center'} my={1}>
        <Image src={image} alt={title} width={widthImage} height={heightImage} />
      </Grid>
      <Grid height={'3.6rem'}> <Typography variant='h3' fontSize={'1.3rem'} sx={styling}>{title}</Typography></Grid>
      <Typography variant='subtitle1' fontSize={'1.2rem'}>{Weight}</Typography>
      <Grid display='flex' alignItems={'center'} gap={1} pt={1}>
        <Typography sx={{ bgcolor: 'secondary.main', fontSize: '1.4rem', color: 'common.white', borderRadius: '0.4rem', p: '0.25rem 0.4rem 0px ',height:'2.2rem' }}>{Discount}</Typography>
        <Typography sx={{ textDecoration: 'line-through', fontSize: '1.1rem', fontWeight: '500' }} color={'info.main'}>{priceReduction}</Typography>
      </Grid>
      <Grid display='flex' justifyContent={'space-between'} >
        <Typography display={'flex'} pt={1.2} sx={{ fontSize: '1.4rem' }} color={'common.black'} pb={1}>{Price} <Typography fontSize={'1rem'}color={'rgb(97, 100, 117)'} pt={0.5} pr={0.3}>تومان</Typography></Typography>
        
        <Grid position={'absolute'} sx={{ bottom: bottom, left: left }}>
          <Grid display={{ xs: 'none', sm: 'flex' }}> <ButtonProductCardSwiper title={titleBtn} icon={undefined} bgcolor={''} /></Grid>
          <Button sx={{ fontWeight: 400, cursor: 'pointer', display: { xs: 'flex', sm: 'none' } }}><Typography border={'0.1rem solid rgba(35, 71, 251, 0.24)'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'3rem'} height={'3rem'} boxShadow={1} borderRadius={'50%'}>{titleBtn}</Typography></Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)
}

export default CardProductSwiper