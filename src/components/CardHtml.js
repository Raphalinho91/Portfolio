import React from "react";
import html from "../assets/html.svg";
import * as style from "./style";

const CardHtml = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={html} alt="html" />
        </style.BoxImg>
        <style.TextTitle>Html 5</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1>
            <style.Text sx={{ color: "#F16529" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#F16529" }}>2 ans</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#F16529" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#F16529" }}>+10</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#F16529" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#F16529" }}>95%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "95%", backgroundColor: "#E44D27" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardHtml;
