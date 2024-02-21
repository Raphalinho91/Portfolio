import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import * as style from "./style";
import Page1 from "../../assets/Page1.webp";
import Page2 from "../../assets/Page2.webp";
import Page3 from "../../assets/Page3.webp";
import Page4 from "../../assets/Page4.webp";
import Page5 from "../../assets/Page5.webp";
import Page6 from "../../assets/Page6.webp";

const projects = [
  {
    title: "Test de personnalité",
    description:
      "Site codé en ReactJs avec comme Framework Css Material U.I. et une librairie Javasceipt EmailJs qui me permet de recevoir les réponses du test. Test de personnalité qui permet de déceler ses schémas.",
    imageUrl: Page1,
    projectUrl: "https://test-de-personnalite.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/test_personnalite",
  },
  {
    title: "Se connaitre sois même",
    description:
      "Site codé sur NodeJs avec Express et comme base de données Google Sheets pour stocker les informations de l'utilisateur. Pour le rendu j'utilie Html et Css.",
    imageUrl: Page2,
    projectUrl: "https://se-connaitre.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/se_connaitre",
  },
  {
    title: "Boutique E-commerce",
    description:
      "Site codé avec comme Front React, Redux et Material U.I. comme Back NodeJs et Fastify et comme Base de données MongoDb. Moyen de payement Strype et Paypas intégrer au site. ",
    imageUrl: Page3,
    projectUrl: "https://shopAll.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/ShopAll",
  },
  {
    title: "Landing Page",
    description: "Maquette Figma, codé avec ReactJs.",
    imageUrl: Page4,
    projectUrl: "https://landing-page-quickit.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/Quickit",
  },
  {
    title: "Landing Page",
    description: "Maquette Figma, codé avec ReactJs et Material U.I.",
    imageUrl: Page5,
    projectUrl: "https://landing-page-manager.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/Landing-Page-MUI",
  },
  {
    title: "Landing Page",
    description: "Maquette Figma, codé avec ReactJs et Material U.I.",
    imageUrl: Page6,
    projectUrl: "https://landing-page-mui.onrender.com",
    codeUrl: "https://github.com/Raphalinho91/Landing_Page_MUI_2",
  },
];

const Project = () => {
  return (
    <style.boxHome id="project">
      <style.containerHome>
        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  border: "1px solid #ff9375",
                  width: "100%",
                  height: "100%",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={project.imageUrl}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff9375",
                      color: "#FFD8D8",
                      width: "140px",
                      fontSize: "12px",
                      "&:hover": {
                        backgroundColor: "#ff9375",
                        color: "#FFD8D8",
                      },
                    }}
                    href={project.projectUrl}
                  >
                    Voir le projet
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFD8D8",
                      color: "#ff9375",
                      width: "140px",
                      fontSize: "12px",
                      "&:hover": {
                        backgroundColor: "#FFD8D8",
                        color: "#ff9375",
                      },
                    }}
                    href={project.codeUrl}
                  >
                    Code Source
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </style.containerHome>
    </style.boxHome>
  );
};

export default Project;
