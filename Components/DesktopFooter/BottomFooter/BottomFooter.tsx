import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dataAccessFooter } from "../../../Data/DataAccessFooter";
import { dataContactUsFooter } from "../../../Data/DataContactUs";
import { dataLogoFooter } from "../../../Data/DataLogoFooter";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type Props = {};

const BottomFooter = (props: Props) => {
  return (
    <Grid sx={{ display: "flex", direction: "rtl", justifyContent: "space-between" }} item xs={12}>
      <Grid display={"flex"} flexDirection={"column"}>
        <Typography fontWeight={500} variant="h3" fontSize={{ sm: '1.4rem', md: '1.6rem' }} color={"rgb(26,28,35)"} pb={1.5}>
          درباره‌ما
        </Typography>
        <Typography fontSize={{ sm: '1.2rem', md: "1.4rem" }} maxWidth={{ sm: 169, md: 227 }} lineHeight={'2.8rem'} variant="subtitle1" color={"info.light"}>
          اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا کالاهای
          مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
        </Typography>
        <Typography fontSize={{ sm: '1.2rem', md: "1.4rem" }} maxWidth={169} lineHeight={2.5} variant="subtitle1" color={"info.light"}>
          هایپر استار | مایلی
        </Typography>
      </Grid>
      <Grid item xs={3} display={"flex"} flexDirection={"column"}>
        <Typography fontWeight={500} fontSize={{ sm: '1.4rem', md: '1.6rem' }} pr={5} variant="h3" color={"rgb(26,28,35)"}>
          دسترسی‌ها
        </Typography>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {dataAccessFooter.map((item) => (
            <Link key={item.id} href={item.href} style={{ color: "rgb(117, 117, 117)" }}>
              <Typography maxWidth={{ sm: 120, md: 150 }} lineHeight={"2.8rem"} fontSize={{ sm: '1.2rem', md: "1.4rem" }} >
                <li>{item.title}</li>
              </Typography>
            </Link>
          ))}
        </ul>
      </Grid>
      <Grid item xs={3} display={"flex"} flexDirection={"column"}>
        <Typography fontWeight={500} fontSize={{ sm: '1.4rem', md: '1.6rem' }} variant="h3" color={"rgb(26,28,35)"}>
          تماس با ما
        </Typography>
        <ul
          style={{
            listStyleType: "none",
            color: "rgb(117, 117, 117)",
            padding: "0 0 0 30px",
          }}
        >
          {dataContactUsFooter.map((item) => (
            <li key={item.id}>
              <Typography maxWidth={{ sm: 180, md: 215, lg: 251 }} lineHeight={'2.8rem'} fontSize={{ sm: "1.2rem", md: "1.4rem" }}>
                {item.title} {item.value}
              </Typography>
            </li>
          ))}
        </ul>
        <Grid borderTop={1} borderColor={'rgb(240,240,240)'} mb={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} color={'rgb(117,117,117)'}>
          <Typography fontSize={{ sm: '1.2rem', md: "1.4rem" }} style={{ paddingTop: 2, marginTop: 10 }} variant="subtitle2" color={"info.light"}>
            {'info@snapp.market'}
          </Typography>
          <InstagramIcon style={{ paddingTop: 2, marginTop: 10 }} />
          <TwitterIcon style={{ paddingTop: 2, marginTop: 10 }} />
        </Grid>
      </Grid>
      <Grid
        pl={3}
        display={"flex"}
        alignItems={"center"}
        gap={2}
      >
        {dataLogoFooter.map((item) => (
          <Grid width={{ sm: 57, md: 81 }} mb={18} container justifyContent={"center"} alignItems={"center"} key={item.id} bgcolor={"common.white"} boxShadow={3} borderRadius={1}>
            <Image src={item.image} alt={"logo"} style={{ width: '90%', height: "90%", padding: "18px 10px" }} />
          </Grid>
        ))}
      </Grid>
    </Grid >
  );
};

export default BottomFooter;
