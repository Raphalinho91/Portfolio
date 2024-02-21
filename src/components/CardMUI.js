import React from "react";
import mui from "../assets/MUI.webp";
import * as style from "./style";

const CardMui = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg sx={{ marginTop: "20px" }}>
          <style.Image src={mui} alt="Mui" />
        </style.BoxImg>
        <style.TextTitle>Material U.I.</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "6.5rem" }}>
            <style.Text sx={{ color: "#00B1FE" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#00B1FE" }}>1 ans</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#00B1FE" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#00B1FE" }}>+20</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#00B1FE" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#00B1FE" }}>95%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "95%", backgroundColor: "#0082CC" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardMui;
