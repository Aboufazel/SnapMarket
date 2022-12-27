import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  icon: any,
  bgcolor: string
}

const ButtonProductCardSwiper = ({ title, icon, bgcolor }: Props) => {
  return (
    <Grid>
      <Button variant='outlined' sx={{ color: bgcolor, cursor: 'pointer',px:'10px'}}>
        <Typography display={'flex'}>{title}{icon}</Typography>
      </Button>
    </Grid>
  )
}

export default ButtonProductCardSwiper