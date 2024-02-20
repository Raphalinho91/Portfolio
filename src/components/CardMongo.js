import React from "react";
import mongo from "../assets/mongo.svg";
import * as style from "./style";

const CardMongo = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={mongo} alt="Mongo" />
        </style.BoxImg>
        <style.TextTitle>Mongo</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5rem" }}>
            <style.Text sx={{ color: "#50AA4D" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#50AA4D" }}>5 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#50AA4D" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#50AA4D" }}>+10</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#50AA4D" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#50AA4D" }}>90%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "80%", backgroundColor: "#449C45" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardMongo;
