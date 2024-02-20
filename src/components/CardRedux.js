import React from "react";
import redux from "../assets/redux.svg";
import * as style from "./style";

const CardRedux = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={redux} alt="Redux" />
        </style.BoxImg>
        <style.TextTitle>Redux</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5.5rem" }}>
            <style.Text sx={{ color: "#764ABC" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#764ABC" }}>2 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#764ABC" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#764ABC" }}>+03</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#764ABC" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#764ABC" }}>60%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "60%", backgroundColor: "#764ABC" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardRedux;
