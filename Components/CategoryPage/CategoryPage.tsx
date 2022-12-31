import { Grid } from "@mui/material";
import React from "react";
import DesktopFooter from "../DesktopFooter/DesktopFooter";
import MainCategoryPage from "./MainCategoryPage/MainCategoryPage";
import SidebarCategoryPage from "./SidebarCategoryPage/SidebarCategoryPage";

type Props = {};

const CategoryPage = (props: Props) => {
  return (
    <Grid mt={10}>
      <Grid display={"flex"} justifyContent={"space-around"} item xs={12} >
        <Grid width={"20%"} position="relative" mt={0.5}>
          <SidebarCategoryPage />
        </Grid>
        <Grid width={"75%"}>
          <MainCategoryPage />
        </Grid>
      </Grid>
      <Grid>
        <DesktopFooter />
      </Grid>
    </Grid>
  );
};

export default CategoryPage;
