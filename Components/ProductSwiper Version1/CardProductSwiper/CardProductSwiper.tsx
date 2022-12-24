import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ButtonProductCardSwiper from '../../ButtonProductCardSwiper/ButtonProductCardSwiper'
import { dataCardSliderType } from "../../../Model/DataCardSliderV1Type";


const CardProductSwiper = ({ bottom, left, title, image, Price, Weight, priceReduction, Discount, width, titleBtn, heightImage, widthImage }: dataCardSliderType) => {
  return (
    <Grid display='flex' gap={2} width={width} sx={{ cursor: "pointer" }}  >
      <Grid position={'relative'} bgcolor={'common.white'} borderRadius={'0.5rem'} width={234} px={2} >
        <Grid display='flex' justifyContent={'center'} my={1}>
          <Image src={image} alt={title} width={widthImage} height={heightImage} />
        </Grid>
        <Grid height={60}> <Typography variant='h3' fontSize={'1rem'}>{title}</Typography></Grid>
        <Typography variant='subtitle1' fontSize={'0.8rem'}>{Weight}</Typography>
        <Grid display='flex' alignItems={'center'} gap={1} py={1}>
          <Typography sx={{ bgcolor: 'secondary.main', color: 'common.white', borderRadius: 1, p: '2px 4px' }}>{Discount}</Typography>
          <Typography sx={{ textDecoration: 'line-through', fontSize: '12px', fontWeight: '500' }} color={'info.main'}>{priceReduction}</Typography>
        </Grid>
        <Grid display='flex' justifyContent={'space-between'} >
          <Typography pt={1.2} sx={{ fontSize: '12px' }} color={'common.black'} pb={2}>{Price}تومان</Typography>
          <Grid position={'absolute'} sx={{ bottom: bottom, left: left }}>
            <Grid display={{xs:'none',sm:'flex'}}> <ButtonProductCardSwiper title={titleBtn}  bgcolor={''} value={''} icon={''}/></Grid>
            <Button sx={{ fontWeight: 400, cursor: 'pointer', display: { xs: 'flex', sm: 'none' } }}><Typography border={'0.1rem solid rgba(35, 71, 251, 0.24)'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'3rem'} height={'3rem'} boxShadow={1} borderRadius={'50%'}>{titleBtn}</Typography></Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardProductSwiper