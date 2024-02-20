import React from "react";
import react from "../assets/react.svg";
import * as style from "./style";

const CardReact = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={react} alt="React" />
        </style.BoxImg>
        <style.TextTitle>ReactJs</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5.5rem" }}>
            <style.Text sx={{ color: "#00D8FE" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#00D8FE" }}>1.5 ans</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#00D8FE" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#00D8FE" }}>+20</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#00D8FE" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#00D8FE" }}>80%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "80%", backgroundColor: "#00D8FE" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardReact;
