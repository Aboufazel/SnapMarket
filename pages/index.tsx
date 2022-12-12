import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "../Theme/Theme";
import MobileProductCard from "../Components/MobileProductCard/MobileProductCard";



export default function Home() {
    return (
        <ThemeProvider theme={Theme}>
            <>
             <MobileProductCard/>
            </>
        </ThemeProvider>
    );
}
