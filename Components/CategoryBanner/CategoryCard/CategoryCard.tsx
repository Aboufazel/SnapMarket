import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
type Props = {
    title: string,
    image: string | any,
    priceReduction: string
}

const CategoryCard = ({ title, image, priceReduction }: Props) => {
    return (
        <>
            <Grid sx={{ display: 'flex',boxShadow:'rgb(0 0 0  2%) 0px 0.2rem 0.7rem 0px',borderRadius:'0.3rem' }} border={'0.1rem solid rgba(163, 163, 163, 0.25)'}>
                <Grid width={{xs:'167px', md: '100px' }}>
                    <Image src={image} alt={title} style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid pt={3} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }} >
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                        <Typography mt={2} p={'10px 8px'} textAlign={'center'} sx={{ fontSize: '14px', color: 'rgb(21,195,42)', transform: 'skew(-10deg)', fontWeight: '300', bgcolor: 'rgb(243,252,244)' }}>
                            {priceReduction}
                        </Typography>
                    </Grid>

                </Box>
            </Grid>
            <Grid display={{ xs: 'flex', md: 'none' }} justifyContent={'center'} mt={1}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </Grid>
        </>
    )
}

export default CategoryCard