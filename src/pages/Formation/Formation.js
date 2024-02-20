import React, { useEffect } from "react";
import * as style from "./style";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import './anim.css'

const TimelineSection = () => {
  const animateOnScroll = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    timelineItems.forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().bottom > 200) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      } else {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", animateOnScroll);
  
    animateOnScroll();
  
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <style.boxFormation id="formation">
      <style.containerFormation>
        <Timeline sx={{ m: 20, width: "100%" }} position="alternate-reverse">
          <TimelineItem className="timeline-item">
            <TimelineOppositeContent>
              <Typography color="textSecondary">2019 - 2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#E6A919" }} />
              <TimelineConnector sx={{ backgroundColor: "#FBEFD3" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ width: "100%" }}>
              <Typography variant="h6" component="span">
                Lycée Joseph Talma - Brunoy
              </Typography>
              <Typography>
                Baccalauréat général avec option Mathématique, <br />
                Sciences Economiques et sociales et Histoire, <br />
                Géographie, Géopolitique et Science Politique.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineOppositeContent>
              <Typography color="textSecondary">avril - mai 2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#E6A919" }} />
              <TimelineConnector sx={{ backgroundColor: "#FBEFD3" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Stage Développeur Front-End au Brésil
              </Typography>
              <Typography>
                Trois semaines de stages sur une librairie Javascript <br />
                qui est ReactJs avec comme Framework CSS Material U.I. <br />
                L'application Web se nomme Conexte et met en relation <br />
                des sociétés. <br />
                - Création de Landing Page. <br />- Création de la page Contact
                de l'application Web.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineOppositeContent>
              <Typography color="textSecondary">2023 - 2025</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#E6A919" }} />
              <TimelineConnector sx={{ backgroundColor: "#FBEFD3" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                BTS SIO - Efrei
              </Typography>
              <Typography>
                Grande École d'Ingénieurs Généraliste et Expert du <br />
                Numérique à Paris. BTS Services Informatiques aux <br />
                Organisations, spécialité à l'école Solutions <br />
                d'Infrastructure, Systèmes et Réseaux et en entreprise <br />
                Solutions Logicielles et Applications Métiers.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className="timeline-item">
            <TimelineOppositeContent>
              <Typography color="textSecondary">2023 - 2025</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#E6A919" }} />
              <TimelineConnector sx={{ backgroundColor: "#FBEFD3" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Acensi - Développeur Web
              </Typography>
              <Typography>
                Alternance en tant que Développeur Web. Je <br />
                programmais avec ReactJs, Redux et Material U.I. <br />
                coté Front et NodeJs, Fastify, Sequelize et ProtegreSQL <br />
                coté Back. Mon travail consistait a : <br />
                - Refacto le code. <br />
                - Ajouter des fonctionnalités. <br />
                - Trouver des bugs et les corriger. <br />
                - Codé des pages. <br />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </style.containerFormation>
    </style.boxFormation>
  );
};

export default TimelineSection;
