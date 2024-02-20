import { Box, Container, Typography, styled } from "@mui/material";

export const boxFormation = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#FFF",
});

export const containerFormation = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
});

export const TimelineBox = styled(Box)({
  display: "flex",
  width: "100%",
  margin: "100px auto",
  flexDirection: "column",
});

export const ContainerBox = styled(Box)({
  display: "flex",
  width: "45%",
  padding: "10px 40px",
  borderRadius: "10px",
  flexDirection: "row",
  gap: "1rem",
  backgroundColor: "#E6A919",

});

export const TextBox = styled(Box)({
  display: "flex",
  padding: "20px 20px",
  fontSize: "15px",
  borderRadius: "10px",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "#FBEFD3",
});

export const TextTitle = styled(Typography)({
  fontSize: "35px",
  color: "#E6A919",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
});

export const TextSousTitle = styled(Typography)({
  fontSize: "20px",
  color: "#000",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
});

export const TextParagraph = styled(Typography)({
  fontSize: "15px",
  color: "#E6A919",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
});

export const BoxImage = styled(Box)({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  padding: "10px",
  backgroundColor: "#FFF",
  border: "2px solid #E6A919",
});

export const ImgBox = styled("img")({
  display: "flex",
  width: "100%",
  height: "100%",
  zIndex: "100",
});
