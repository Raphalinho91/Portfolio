import React from "react";
import node from "../assets/node.svg";
import * as style from "./style";

const CardNode = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={node} alt="Node" />
        </style.BoxImg>
        <style.TextTitle>NodeJs</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5rem" }}>
            <style.Text sx={{ color: "#8CC74A" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#8CC74A" }}>6 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#8CC74A" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#8CC74A" }}>+20</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#8CC74A" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#8CC74A" }}>75%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "75%", backgroundColor: "#8CC74A" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardNode;
