import { Box, Container, Typography, styled } from "@mui/material";

export const boxHome = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#FFF",
  marginTop: "-8px",
  marginBottom: "125px"
});

export const containerHome = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
});

export const boxImage = styled(Box)({
  display: "flex",
  width: "300px",
  height: "300px",
  borderRadius: "150px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-50px",
});

export const ImageSimple = styled("img")({
  display: "flex",
  width: "100%",
  height: "100%",
  borderRadius: "150px",
  border: "2px solid #5B37B7",
  padding: "5px",
});

export const NomPrenom = styled(Typography)({
  fontSize: "15px",
  color: "#DFD7F3",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  marginTop: "25px",
});

export const TextCote = styled(Typography)({
  fontSize: "15px",
  color: "#5B37B7",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  marginTop: "25px",
  "& span": {
    color: "#DFD7F3",
  },
});

export const Title = styled(Typography)({
  fontSize: "31px",
  color: "#5B37B7",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "900",
  marginTop: "10px",
});

export const BoxRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const BoxRow2 = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "row",
  marginTop: "30px",
  gap: "1.75rem",
  color: "#DFD7F3",
});

export const BoxColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  width: "100%",
});

export const BoxColumn2 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
});

export const BoxColumn3 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "right",
  width: "100%",
  marginBottom: "1px",
  gap: "5rem",
});

export const lien = styled("a")({
  textDecoration: "none",
  listStyle: "none",
  outline: "none",
  color: "#DFD7F3",
});
