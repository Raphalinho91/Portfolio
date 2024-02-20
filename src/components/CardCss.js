import React from "react";
import css from "../assets/css.svg";
import * as style from "./style";

const CardCss = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={css} alt="Css" />
        </style.BoxImg>
        <style.TextTitle>Css 3</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1>
            <style.Text sx={{ color: "#2865F0" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#2865F0" }}>2 ans</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#2865F0" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#2865F0" }}>+10</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#2865F0" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#2865F0" }}>95%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress
              style={{ width: "95%", backgroundColor: "#264DE3" }}
            />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardCss;
