import {Box} from "@mui/system";
import Grid from "@mui/material/Grid";
import {Add, Delete} from "@mui/icons-material";
import Image from "next/image";
import sample from "../../assets/Images/cheese.jpg"
import {Button, Typography} from "@mui/material";

const MobileProductCard = () => {

    return (
        <Grid display={"flex"}
              paddingY={1.2}
              border={1}
              position={"relative"}
              paddingX={1}
              height={240}
              width={135}
              borderRadius={2}
              flexDirection={"column"}
              alignItems={"start"}>
            <Box display={"flex"}
                 alignItems={"center"}
                 position={"absolute"}
                 bgcolor={"common.white"}
                 color={"primary.main"}
                 left={10}
                 justifyContent={"center"}
                 border={1}
                 sx={{borderColor: "rgba(35, 71, 251, 0.24)"}} width={30}
                 borderRadius={50} height={30}>
                <Add/>
            </Box>
            <Grid display={"flex"}
                  justifyContent={"end"}
                  width={'100%'}
                  zIndex={1000}
                  bgcolor={"common.white"}>
            </Grid>
            <Grid display={"flex"} gap={1} width={'100%'} textAlign={"start"} flexDirection={"column"}>
                <Box display={"flex"}
                     alignItems={"center"}
                     justifyContent={"center"}>
                    <Image width={90} src={sample} alt={"پنیر"}/>
                </Box>
                <Typography variant={"subtitle2"}>
                    {"پنیر سفید نیم چرب دوشه هراز"}
                </Typography>
                <Typography sx={{fontSize: "12px", color: "info.light"}}>
                    {"400 گرم"}
                </Typography>
                <Box display={"flex"} alignItems={"center"} width={'100%'}>
                    <Box ml={0.5} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={0.3}
                         borderRadius={1} color={"common.white"} bgcolor={"secondary.main"}>
                        <Typography fontSize={12}>
                            {"26%"}
                        </Typography>
                    </Box>
                    <Typography fontSize={12} sx={{color: "info.light"}}>
                        <del>
                            {"39,800"}
                        </del>
                    </Typography>
                </Box>
                <Typography fontSize={12} sx={{color: "info.light"}}>
                    {"29,450 تومان"}
                </Typography>
            </Grid>
            <Button endIcon={<Add/>} variant={"contained"} startIcon={<Delete/>}
                    sx={{
                        display: "flex"
                        , paddingX: 0,
                        paddingY: 0.8,
                        fontWeight: 500,
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 14,
                        width: "100%",
                        backgroundColor: "primary.main",
                        color: "common.white", borderRadius: 2
                    }}>
                {"1"}
            </Button>
        </Grid>
    )
}

export default MobileProductCard;