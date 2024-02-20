import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";

export const boxHome = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "90vh",
  backgroundColor: "#FFF",
});

export const containerHome = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  minHeight: "90vh",
});

export const BoxRow = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
});

export const BoxRow2 = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "75%",
  flexDirection: "row",
});

export const BoxRow3 = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "10px",
});

export const BoxColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
});

export const BoxColumn2 = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  gap: "7px",
});

export const BoxRond = styled(Box)({
  display: "flex",
  width: "80px",
  height: "80px",
  borderRadius: "40px",
  backgroundColor: "#D1EBEF",
  marginRight: "10px",
  alignItems: "center",
  justifyContent: "center",
});

export const boxImage = styled(Box)({
  display: "flex",
  width: "350px",
  height: "350px",
});

export const ImageSimple = styled("img")({
  display: "flex",
  width: "100%",
  height: "100%",
});

export const ImageHtml = styled("img")({
  display: "flex",
  width: "65%",
  height: "65%",
});

export const Text = styled(Typography)({
  fontSize: "35px",
  color: "#1194AA",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  marginTop: "25px",
  "& span": {
    color: "#1194AA",
  },
});

export const Pointille = styled(Box)({
    display: "flex",
    width: "7px",
    color: "#1194AA",
    border: "1px solid #1194AA",
    borderColor: "#1194AA",
});

export const PointilleDiagTop = styled(Box)({
  display: "flex",
  width: "7px",
  color: "#1194AA",
  border: "1px solid #1194AA",
  borderColor: "#1194AA",
  rotate: "-30deg",
});

export const PointilleDiagBottom = styled(Box)({
  display: "flex",
  width: "7px",
  color: "#1194AA",
  border: "1px solid #1194AA",
  borderColor: "#1194AA",
  rotate: "30deg",
});
