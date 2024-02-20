import { Grid, Toolbar, Typography } from "@mui/material";
import * as style from "./style";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailIcon from "@mui/icons-material/Mail";

const NavBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <style.container>
      <style.navbar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <style.gridNav>
            <style.lien href="#home">
              <Grid onClick={() => handleIconClick("home")}>
                {selectedIcon === "home" ? (
                  <style.gridComp1>
                    <HomeIcon />
                    <Typography>Home</Typography>
                  </style.gridComp1>
                ) : (
                  <HomeIcon sx={{ color: "#44475C" }} />
                )}
              </Grid>
            </style.lien>
            <style.lien href="#profile">
              <Grid onClick={() => handleIconClick("profil")}>
                {selectedIcon === "profil" ? (
                  <style.gridComp2>
                    <PersonIcon />
                    <Typography>Profile</Typography>
                  </style.gridComp2>
                ) : (
                  <PersonIcon sx={{ color: "#44475C" }} />
                )}
              </Grid>
            </style.lien>
            <style.lien href="#formation">
              <Grid onClick={() => handleIconClick("ecole")}>
                {selectedIcon === "ecole" ? (
                  <style.gridComp3>
                    <SchoolIcon />
                    <Typography>Formation</Typography>
                  </style.gridComp3>
                ) : (
                  <SchoolIcon sx={{ color: "#44475C" }} />
                )}
              </Grid>
            </style.lien>

            <style.lien href="#project">
              <Grid onClick={() => handleIconClick("project")}>
                {selectedIcon === "project" ? (
                  <style.gridComp4>
                    <BarChartIcon />
                    <Typography>Projets</Typography>
                  </style.gridComp4>
                ) : (
                  <BarChartIcon sx={{ color: "#44475C" }} />
                )}
              </Grid>
            </style.lien>

            <style.lien href="#contact">
              <Grid onClick={() => handleIconClick("contact")}>
                {selectedIcon === "contact" ? (
                  <style.gridComp5>
                    <MailIcon />
                    <Typography>Contact</Typography>
                  </style.gridComp5>
                ) : (
                  <MailIcon sx={{ color: "#44475C" }} />
                )}
              </Grid>
            </style.lien>
          </style.gridNav>
        </Toolbar>
      </style.navbar>
    </style.container>
  );
};

export default NavBar;
