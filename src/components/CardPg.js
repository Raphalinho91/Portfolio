import React from "react";
import pgsql from "../assets/PGSQL.webp";
import * as style from "./style";

const CardPgsql = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={pgsql} alt="Pgsql" />
        </style.BoxImg>
        <style.TextTitle>Protegre SQL</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5.5rem" }}>
            <style.Text sx={{ color: "#2F6792" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#2F6792" }}>2 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#2F6792" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#2F6792" }}>+03</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#2F6792" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#2F6792" }}>70%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "70%", backgroundColor: "#2F6792" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardPgsql;
