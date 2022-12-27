import Grid from "@mui/material/Grid";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme/Theme";
import DesktopHeader from "../Components/Header/DekstopHeader";
import HeaderCategoryLayout from "../Components/HeaderCategoryLayout/HeaderCategoryLayout";
import HeaderAddressLayout from "../Components/HeaderAddressLayout/HeaderAddressLayout";
import SecondaryHeader from "../Components/Header/SecondaryHeader";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid>
        <CssBaseLine />
        {/* <DesktopHeader /> */}
        <SecondaryHeader />
      </Grid>
    </ThemeProvider>
  );
}
