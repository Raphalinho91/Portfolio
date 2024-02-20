import React from "react";
import javascript from "../assets/javascript.svg";
import * as style from "./style";

const CardJavascript = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={javascript} alt="Javascript" />
        </style.BoxImg>
        <style.TextTitle>Javascript</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5.5rem" }}>
            <style.Text sx={{ color: "#FFD700" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#FFD700" }}>1.5 ans</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#FFD700" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#FFD700" }}>+30</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#FFD700" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#FFD700" }}>80%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "80%", backgroundColor: "#F7DF1C" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardJavascript;
