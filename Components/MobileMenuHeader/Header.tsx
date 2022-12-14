import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material'
import Modal from '@mui/material/Modal';
// import Button from "../../Components/ButtonProductCardSwiper/ButtonProductCardSwiper"
import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import Image from 'next/image';

import image from "../../assets/Images/hypermarket.jpg"

import Link from 'next/link';

import MobileStoreSelectore from "../MobileStoreSelectore/MobileStoreSelectore";



type Props = {}

const Header = (props: Props) => {



    const [openselect, setOpenSelect] = useState(false);
    const manageOpenModal = () => {
        setOpenSelect(!openselect)
        console.log(openselect)
    }

    const StyledTextField = styled(TextField)(({ theme }) => ({

        width: "100%",
        // height: "4.8rem",
        background: "rgb(248, 249, 253)",
        borderRadius: "0.8rem",
        // border:"0.1rem solid rgb(230, 230, 230)",

        "& label": {
            ...theme.typography["body1"],
            // color: "rgb(141,141,141)",
        },
        "& .MuiOutlinedInput-root": {
            fontSize: "1.4rem",
            color: 'rgb(155, 158, 174)',
            borderRadius: "0.8rem",
            height: '4.8rem',
        },
    }));
    return (

        <Grid display={{ xs: 'flex', sm: 'none' }} flexDirection={'column'} position={'fixed'} bgcolor={'common.white'}right={0} left={0} top={0} zIndex={100}>
            <Grid sx={{ display: "flex", justifyContent: "space-around", alignItems: "stretch" }} borderBottom={1}
                borderColor={'rgb(230, 230, 230)'} pt={2} pr={2} pl={2}>

                {/* color?? */}
                <Grid container pb={2} alignItems={"flex-end"}>
                    <Typography variant='h2'>اطراف شما</Typography>
                    <KeyboardArrowDownIcon style={{ width: "24px", height: "24px" }} />
                </Grid>

                <Link href={'/profile'}>
                    <Grid pl={0.25}>
                        <PersonOutlineOutlinedIcon style={{ width: "24px", height: "24px" }} />
                    </Grid>
                </Link>

            </Grid>
           
            <Container>
                <Grid mb={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Grid container>
                        <Grid pt={2}>
                            <Grid display={"flex"} border={1} borderRadius={"50%"} borderColor={"rgb(230, 230, 230)"}>
                                <Image style={{ borderRadius: "50%" }} width={50} src={image} alt={"hyper"} />
                            </Grid>
                        </Grid>
                        <Grid pt={1.75} pr={1}>
                            <Typography variant='h2'>هایپر استار صبا</Typography>
                            <Typography variant='subtitle2' maxWidth={112}>ارسال رایگان بالای 200,000 تومان</Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button onClick={manageOpenModal} style={{ width: "115px" }} variant='outlined'
                            sx={{ padding: '0.8rem 1.2rem', marginRight: 'auto', height: "3.7rem" }}>

                            <Grid container alignItems={"center"}>
                                تغییر فروشگاه
                                <KeyboardArrowDownIcon style={{ width: "24px", height: "24px" }} />
                            </Grid>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <StyledTextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue=" جست و جو در برند یا محصول"
                        InputProps={{
                            endAdornment: <SearchIcon style={{ margin: "0 10px", width: "24px", height: "24px" }} />
                        }}
                    />
                </Grid>
                <Modal open={openselect}>
                    <MobileStoreSelectore close={openselect} setClose={setOpenSelect} />
                </Modal>
            </Container>
        </Grid>
    )
}

export default Header