import React from "react";
import * as style from "./style";
import PNJUser from "../../assets/PNJUser.webp";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import mui from "../../assets/MUI.webp";
import fastify from "../../assets/fastify.svg";
import node from "../../assets/node.svg";
import express from "../../assets/express.svg";
import mongo from "../../assets/mongo.svg";
import mysql from "../../assets/mysql.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import pgsql from "../../assets/PGSQL.webp";

const ProfileMobile = () => {
  return (
    <>
      <style.BorderAnim />
      <style.boxImageMe sx={{ marginLeft: "30%" }}>
        <style.StyleImage src={PNJUser} alt="user" />
      </style.boxImageMe>
      <style.BorderAnim1 />
      <style.BorderAnim2 />
      <style.BorderAnim3 />
      <style.TextFront sx={{ animationDelay: "3.35s" }}>FRONT</style.TextFront>
      <style.BorderAnim4 />
      <style.TextBack sx={{ animationDelay: "3.7s" }}>BACK</style.TextBack>
      <style.BorderAnim5 />
      <style.TextBaseDeDonne sx={{ animationDelay: "4s" }}>
        BASES DE DONNEES
      </style.TextBaseDeDonne>

      <style.BoxRow sx={{ width: "80%" }}>
        <style.BoxColumn sx={{ width: "100%" }}>
          <style.BoxRow1>
            <style.BorderAnim6 />
            <style.BorderAnim7 />
            <style.BorderAnim8 />
            <style.BorderAnim9 />
            <style.BorderAnim10 />
            <style.BorderAnim11 />
            <style.BorderAnim12 />
            <style.BorderAnim13 />
            <style.BorderAnim14 />
            <style.BoxRond
              sx={{
                marginTop: "55px",
                marginLeft: "18.7%",
                animationDelay: "5.2s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={html} alt="html" />
            </style.BoxRond>
            <style.BoxRond
              sx={{
                marginTop: "30px",
                marginLeft: "18.7%",
                animationDelay: "5.2s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={css} alt="css" />
            </style.BoxRond>
            <style.BorderAnim15 />
            <style.BorderAnim16 />
            <style.BorderAnim17 />
            <style.BorderAnim18 />
            <style.BorderAnim19 />
            <style.BorderAnim20 />
            <style.BorderAnim21 />
            <style.BorderAnim22 />
            <style.BoxRond
              sx={{
                marginTop: "-110px",
                marginLeft: "45.7%",
                animationDelay: "6.9s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={javascript} alt="javascript" />
            </style.BoxRond>
            <style.BorderAnim23 />
            <style.BorderAnim24 />
            <style.BoxRond
              sx={{
                marginTop: "-50px",
                marginLeft: "63.7%",
                animationDelay: "7.8s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={react} alt="react" />
            </style.BoxRond>
            <style.BorderAnim25 />
            <style.BorderAnim26 />
            <style.BorderAnim27 />
            <style.BoxRond
              sx={{
                marginTop: "-90px",
                marginLeft: "83.3%",
                animationDelay: "8.9s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={redux} alt="redux" />
            </style.BoxRond>
            <style.BorderAnim25 sx={{ top: "130px", rotate: "30deg" }} />
            <style.BorderAnim26 sx={{ top: "140px", rotate: "30deg" }} />
            <style.BorderAnim27 sx={{ top: "150px", rotate: "30deg" }} />
            <style.BoxRond
              sx={{
                marginTop: "30px",
                marginLeft: "83.3%",
                animationDelay: "8.9s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml
                src={mui}
                alt="mui"
                sx={{ width: "60%", height: "60%" }}
              />
            </style.BoxRond>
          </style.BoxRow1>
          <style.BoxRow1 sx={{ top: "40%" }}>
            <style.BorderAnim6 />
            <style.BorderAnim7 />
            <style.BorderAnim8 />
            <style.BoxRond
              sx={{
                marginTop: "95px",
                marginLeft: "10%",
                animationDelay: "4.6s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={node} alt="node" />
            </style.BoxRond>
            <style.BorderAnim9 sx={{ left: "21%", animationDelay: "4.8s" }} />
            <style.BorderAnim10 sx={{ left: "24%", animationDelay: "5s" }} />
            <style.BorderAnim11 sx={{ left: "21%", animationDelay: "4.8s" }} />
            <style.BorderAnim12 sx={{ left: "24%", animationDelay: "5" }} />
            <style.BorderAnim13 sx={{ left: "27%", animationDelay: "5.2s" }} />
            <style.BorderAnim14 sx={{ left: "27%", animationDelay: "5.2s" }} />
            <style.BoxRond
              sx={{
                marginTop: "-95px",
                marginLeft: "30%",
                animationDelay: "5.4s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={express} alt="express" />
            </style.BoxRond>
            <style.BoxRond
              sx={{
                marginTop: "30px",
                marginLeft: "30%",
                animationDelay: "5.4s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={fastify} alt="fastify" />
            </style.BoxRond>
          </style.BoxRow1>
          <style.BoxRow1 sx={{ top: "69%" }}>
            <style.BorderAnim6 sx={{ left: "13%" }} />
            <style.BorderAnim7 sx={{ left: "16%" }} />
            <style.BorderAnim8 sx={{ left: "19%" }} />
            <style.BoxRond
              sx={{
                marginTop: "95px",
                marginLeft: "23%",
                animationDelay: "4.6s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={mysql} alt="mysql" />
            </style.BoxRond>
            <style.BorderAnim6 sx={{ left: "34%", animationDelay: "4.8s" }} />
            <style.BorderAnim7 sx={{ left: "37%", animationDelay: "5s" }} />
            <style.BorderAnim8 sx={{ left: "40%", animationDelay: "5.2s" }} />
            <style.BoxRond
              sx={{
                marginTop: "-55px",
                marginLeft: "43%",
                animationDelay: "5.4s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml
                src={pgsql}
                alt="pgsql"
                sx={{ width: "60%", height: "60%" }}
              />
            </style.BoxRond>
            <style.BorderAnim6 sx={{ left: "54%", animationDelay: "5.6s" }} />
            <style.BorderAnim7 sx={{ left: "57%", animationDelay: "5.8s" }} />
            <style.BorderAnim8 sx={{ left: "60%", animationDelay: "6s" }} />
            <style.BoxRond
              sx={{
                marginTop: "-55px",
                marginLeft: "63%",
                animationDelay: "6.2s",
                cursor: "pointer",
              }}
            >
              <style.ImageHtml src={mongo} alt="mongo" />
            </style.BoxRond>
          </style.BoxRow1>
        </style.BoxColumn>
      </style.BoxRow>
    </>
  );
};

export default ProfileMobile;
