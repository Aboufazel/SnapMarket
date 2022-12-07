import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dataAccessFooter } from '../../../Data/DataAccessFooter'
import { dataContactUsFooter } from '../../../Data/DataContactUs'
import { dataLogoFooter } from '../../../Data/DataLogoFooter'
type Props = {}

const BottomFooter = (props: Props) => {
    return (
        <Grid container item sx={{ direction: 'rtl' }} xs={12} display={'flex'} mt={{xs:'80px',md:'0px'}}>
            <Grid item xs={2.8} display={'flex'} flexDirection={'column'}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>درباره‌ما</Typography>
                <Typography sx={{ fontSize: '14px', lineHeight: '1.8rem', color: 'rgb(117, 117, 117)' }}>
                    اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
                    هایپر استار | مایلی
                </Typography>
            </Grid>
            <Grid item xs={3} display={'flex'} flexDirection={'column'}>
                <Typography pr={5} sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                    دسترسی‌ها
                </Typography>
                <ul style={{ listStyleType: 'none', fontSize: '14px', lineHeight: '2.1rem' }}>
                    {dataAccessFooter.map(item => (
                        <Link key={item.id} href={item.href} style={{ color: 'rgb(117, 117, 117)' }}>
                            <li>{item.title}</li>
                        </Link>
                    ))}
                </ul>

            </Grid>
            <Grid item xs={3} display={'flex'} flexDirection={'column'}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                    تماس با ما
                </Typography>
                <ul style={{ listStyleType: 'none', fontSize: '14px', lineHeight: '2rem', color: 'rgb(117, 117, 117)', padding: '0 0 0 30px' }}>
                    {dataContactUsFooter.map(item => (
                        <li key={item.id}>{item.title} {item.value}</li>
                    ))}
                </ul>
            </Grid>
            <Grid item xs={3.2}  pt={5} display={'flex'}  justifyContent={'space-evenly'} alignItems={'start'} gap={1} >   
                {dataLogoFooter.map(item => (
                    <Grid key={item.id} width={{xs:'80px'}}height={{xs:'80px'}} bgcolor={'common.white'} boxShadow={3} borderRadius={1}>
                        <Image src={item.image} alt={'logo'} style={{width:'100%',height:'100%'}}/>
                    </Grid>
                ))}
            </Grid>

        </Grid>
    )
}

export default BottomFooter