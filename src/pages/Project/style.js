import {
  Box,
  Container,
  styled,
} from "@mui/material";

export const boxHome = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "90vh",
  backgroundColor: "#FFF",
  marginTop: '-50px'
});

export const containerHome = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  minHeight: "90vh",
});
