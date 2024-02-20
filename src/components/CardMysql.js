import React from "react";
import mysql from "../assets/mysql.svg";
import * as style from "./style";

const CardMysql = () => {
  return (
    <style.GridBox>
      <style.BoxCard>
        <style.BoxImg>
          <style.Image src={mysql} alt="Mysql" />
        </style.BoxImg>
        <style.TextTitle>MySQL</style.TextTitle>
        <style.BoxCard2>
          <style.BoxCard1 sx={{ gap: "5rem" }}>
            <style.Text sx={{ color: "#5D87A0" }}>Expérience</style.Text>
            <style.Numero sx={{ color: "#5D87A0" }}>6 mois</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "9.5rem" }}>
            <style.Text sx={{ color: "#5D87A0" }}>Projets</style.Text>
            <style.Numero sx={{ color: "#5D87A0" }}>+10</style.Numero>
          </style.BoxCard1>
          <style.BoxCard1 sx={{ gap: "8.5rem" }}>
            <style.Text sx={{ color: "#5D87A0" }}>Maîtrise</style.Text>
            <style.Numero sx={{ color: "#5D87A0" }}>90%</style.Numero>
          </style.BoxCard1>
          <style.ProgressBar>
            <style.Progress style={{ width: "90%", backgroundColor: "#F8971C" }} />
          </style.ProgressBar>
        </style.BoxCard2>
      </style.BoxCard>
    </style.GridBox>
  );
};

export default CardMysql;
