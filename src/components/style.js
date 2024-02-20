import { Box, Grid, Typography, styled } from "@mui/material";

export const container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const navbar = styled(Box)({
  position: "fixed",
  overflow: "hidden",
  bottom: "15px",
  backgroundColor: "#FFF",
  borderRadius: "20px",
  border: "2px solid #CCD5E5",
  height: "55px",
  width: "480px",
  zIndex: "100",
});

export const gridNav = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
  marginBottom: "5px",
  flexDirection: "row",
  width: "100%",
});

export const gridComp1 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
  width: "100%",
  marginBottom: "5px",
  cursor: "pointer",
  color: "#5B37B7",
  backgroundColor: "#DFD7F3",
  borderRadius: "20px",
  padding: "5px 10px 5px 10px",
});

export const gridComp2 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
  width: "100%",
  marginBottom: "5px",
  cursor: "pointer",
  color: "#1194AA",
  backgroundColor: "#D1EBEF",
  borderRadius: "20px",
  padding: "5px 10px 5px 10px",
});

export const gridComp3 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
  width: "100%",
  marginBottom: "5px",
  cursor: "pointer",
  color: "#E6A919",
  backgroundColor: "#FBEFD3",
  borderRadius: "20px",
  padding: "5px 10px 5px 10px",
});
export const gridComp4 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
  width: "100%",
  marginBottom: "5px",
  cursor: "pointer",
  color: "#ff9375",
  backgroundColor: "#FFD8D8",
  borderRadius: "20px",
  padding: "5px 10px 5px 10px",
});

export const gridComp5 = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
  width: "100%",
  marginBottom: "5px",
  cursor: "pointer",
  color: "#C9379D",
  backgroundColor: "#F6D6EE",
  borderRadius: "20px",
  padding: "5px 10px 5px 10px",
});

export const lien = styled("a")({
  textDecoration: "none",
  listStyle: "none",
  outline: "none",
});

export const GridBox = styled(Grid)({
  display: "flex",
  width: "100%",
  marginTop: "20px",
});

export const BoxCard = styled(Grid)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: "40%",
  justifyContent: "center",
  alignItems: "center",
});

export const BoxCard1 = styled(Grid)({
  display: "flex",
  width: "90%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "6rem",
});

export const BoxCard2 = styled(Grid)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  marginTop: "30px",
});

export const BoxImg = styled(Grid)({
  display: "flex",
  width: "40%",
});

export const Image = styled("img")({
  display: "flex",
  width: "100%",
  height: "100%",
});

export const TextTitle = styled(Typography)({
  display: "flex",
  fontSize: "28px",
  color: "#000",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  marginTop: "30px",
});

export const Text = styled(Typography)({
  display: "flex",
  fontSize: "18px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  marginTop: "20px",
});

export const Numero = styled(Typography)({
  display: "flex",
  fontSize: "18px",
  fontFamily: "Poppins, sans-serif",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  fontWeight: "400",
  marginTop: "20px",
});

export const ProgressBar = styled(Box)({
  display: "flex",
  width: "90%",
  height: "10px",
  backgroundColor: "#D1EBEF",
  marginTop: "0px",
  borderRadius: "8px",
  boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
});

export const Progress = styled(Box)({
  display: "flex",
  height: "10px",
  borderRadius: "5px",
  width: "0%",
  transition: "width 0.5s ease-in-out",
});
