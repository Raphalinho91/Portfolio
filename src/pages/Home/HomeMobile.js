import React, { useState, useEffect } from "react";
import * as style from "./style";
import Me from "../../assets/me.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const HomeMobile = () => {
  const [title, setTitle] = useState("");
  const words = ["Front-End", "Back-End", "Full-Stack"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      setTitle(currentWord.substring(0, letterIndex));

      if (isDeleting) {
        if (letterIndex > 0) {
          letterIndex--;
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        if (letterIndex < currentWord.length) {
          letterIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 1000);
        }
      }
    };

    const interval = setInterval(type, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <style.boxHome id="home">
      <style.containerHome>
        <style.BoxRow
          sx={{
            flexDirection: "column",
            marginTop: "100px"
          }}
        >
          <style.BoxColumn2>
            <style.boxImage>
              <style.ImageSimple src={Me} alt="moi" />
            </style.boxImage>
            <style.NomPrenom>
              <strong>Raphaël De Almeida</strong>
            </style.NomPrenom>
            <style.Title>
              <strong>Développeur {title}</strong>
            </style.Title>
            <style.BoxRow2>
              <style.lien href="https://github.com/Raphalinho91">
                <GitHubIcon
                  sx={{ cursor: "pointer", "&:hover": { color: "#5B37B7" } }}
                />
              </style.lien>
              <style.lien href="https://www.linkedin.com/in/raphaël-de-almeida-985a9b279/">
                <LinkedInIcon
                  sx={{ cursor: "pointer", "&:hover": { color: "#5B37B7" } }}
                />
              </style.lien>
              <style.lien href="https://www.instagram.com/_raphalinho.330/">
                <InstagramIcon
                  sx={{ cursor: "pointer", "&:hover": { color: "#5B37B7" } }}
                />
              </style.lien>
            </style.BoxRow2>
          </style.BoxColumn2>
          <style.BoxColumn>
            <style.TextCote>
              Biographie
              <br />
              <span>
                Salut, je suis Raphaël,
                <br />
                Développeur Web. Passioné
                <br />
                par le design et la
                <br />
                confection de site Web.
              </span>
            </style.TextCote>
            <style.TextCote>
              Contact
              <br />
              <span>
                Yerres, France
                <br />
                raphaeldealmeida91@gmail.com
                <br />
                +33 6 45 85 45 46
              </span>
            </style.TextCote>
            <style.TextCote>
              Services
              <br />
              <span>
                Design de site Web
                <br />
                Animation
                <br />
                Création de site
              </span>
            </style.TextCote>
          </style.BoxColumn>
          <style.BoxColumn3>
            <style.TextCote>
              Année d'expérience
              <br />
              <span>2 ans</span>
            </style.TextCote>
            <style.TextCote>
              Projet complet
              <br />
              <span>5</span>
            </style.TextCote>
            <style.TextCote>
              Age
              <br />
              <span>18 ans</span>
            </style.TextCote>
          </style.BoxColumn3>
        </style.BoxRow>
      </style.containerHome>
    </style.boxHome>
  );
};

export default HomeMobile;
