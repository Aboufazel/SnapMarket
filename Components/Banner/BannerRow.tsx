import Grid from "@mui/material/Grid";
import Image from "next/image";
import banner1 from "../../assets/Images/63a9b2eda22b1.jpg"
import banner2 from "../../assets/Images/63a94b926e8cd.jpg"

const BannerRow = () => {
  return(
      <Grid display={"flex"} alignItems={"center"} justifyContent={'center'}>
          <Grid padding={1} width={'50%'} display={"flex"} alignItems={"center"} justifyContent={'center'}>
              <Image src={banner1} alt={'first'} style={{width:'100%' , height:"auto" , borderRadius:5}}/>
          </Grid>
          <Grid padding={1}  width={'50%'} display={"flex"} alignItems={"center"} justifyContent={'center'}>
              <Image src={banner2} alt={'first'} style={{width:'100%' , height:"auto" , borderRadius:5}}/>
          </Grid>
      </Grid>
  )
}

export default BannerRow;