import React from "react";
import fastify from "../assets/fastify.svg";
import * as style from "./style";

const CardFastify = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={fastify} alt="Fastify" />
        </style.BoxImg>
        <style.TextTitle>Fastify</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5.5rem" }}>
            <style.Text sx={{ color: "#000" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#000" }}>3 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#000" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#000" }}>+10</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#000" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#000" }}>80%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "80%", backgroundColor: "#000" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardFastify;
