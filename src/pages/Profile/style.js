import {
  Box,
  Container,
  Grid,
  Typography,
  keyframes,
  styled,
} from "@mui/material";

export const boxProfile = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#FFF",
  marginBottom: "150px",
});

export const boxContainer = styled(Container)({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  flexDirection: "row",
  marginTop: '-0px'
});

const drawOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const boxImageMe = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "243px",
  height: "360.5px",
  width: "100%",
  marginLeft: "40%",
  backgroundColor: "#FFF",
  borderRadius: "24px",
  animation: `${drawOpacity} 2s ease-in-out forwards`,
  opacity: 0,
});

export const StyleImage = styled("img")({
  display: "flex",
  width: "269px",
  height: "344px",
  borderRadius: "24px",
  marginTop: "-26px",
  zIndex: "1",
  background:
    "linear-gradient(180deg, rgba(209,235,239,1) 0%, rgba(209,224,240,1) 49%, rgba(17,148,170,1) 100%)",
});

const drawHeight = keyframes`
  from { height: 0; }
  to { height: 360.5px; }
`;

export const BorderAnim = styled(Grid)({
  position: "absolute",
  maxWidth: "243px",
  top: "0px",
  height: "0",
  width: "100%",
  marginTop: "20px",
  right: "39.4%",
  borderRadius: "24px",
  border: "1px solid transparent",
  borderColor: "#1194aa",
  transformOrigin: "top",
  animation: `${drawHeight} 1s ease-in-out forwards`,
  zIndex: "2",
});

const drawHeight0 = keyframes`
  from { height: 0; }
  to { height: 80px; }
`;

export const BorderAnim1 = styled(Grid)({
  position: "absolute",
  height: "0",
  border: "0.5px solid #1194aa",
  maxWidth: "0.5px",
  width: "100%",
  marginTop: "380px",
  right: "50%",
  top: "0px",
  transformOrigin: "top",
  animation: `${drawHeight0} 1s ease-in-out forwards`,
  animationDelay: "1s",
});

const drawLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40%;
  }
`;

export const BorderAnim2 = styled(Grid)({
  position: "absolute",
  height: "0.5px",
  width: "0",
  border: "0.5px solid #1194aa",
  marginTop: "100px",
  right: "50%",
  animation: `${drawLine} 1s ease-in-out forwards`,
  animationDelay: "2s",
});

const drawHeight1 = keyframes`
  from { height: 0; }
  to { height: 120px; }
`;

export const BorderAnim3 = styled(Grid)({
  position: "absolute",
  top: "0px",
  marginTop: "460px",
  height: "0",
  border: "0.5px solid #1194aa",
  maxWidth: "0.5px",
  width: "0.5px",
  transformOrigin: "top",
  left: "10%",
  animation: `${drawHeight1} 0.35s ease-in-out forwards`,
  animationDelay: "3s",
});

const drawHeight2 = keyframes`
  from { height: 0; }
  to { height: 220px; }
`;

export const BorderAnim4 = styled(Grid)({
  position: "absolute",
  top: "0px",
  marginTop: "620px",
  height: "0",
  border: "0.5px solid #1194aa",
  maxWidth: "0.5px",
  width: "0.5px",
  transformOrigin: "top",
  left: "10%",
  animation: `${drawHeight2} 0.35s ease-in-out forwards`,
  animationDelay: "3.35s",
});

const drawHeight3 = keyframes`
  from { height: 0; }
  to { height: 150px; }
`;

export const BorderAnim5 = styled(Grid)({
  position: "absolute",
  top: "0px",
  marginTop: "870px",
  height: "0",
  border: "0.5px solid #1194aa",
  maxWidth: "0.5px",
  width: "0.5px",
  transformOrigin: "top",
  left: "10%",
  animation: `${drawHeight3} 0.30s ease-in-out forwards`,
  animationDelay: "3.70s",
});

const drawLine1 = keyframes`
  from {
    width: 0;
  }
  to {
    width: 2%;
  }
`;

export const BorderAnim6 = styled(Grid)({
  position: "absolute",
  top: "125px",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4s",
});

export const BorderAnim7 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "3%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.2s",
});

export const BorderAnim8 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "6%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.4s",
});

export const BorderAnim9 = styled(Grid)({
  position: "absolute",
  top: "120px",
  left: "9%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.6s",
});

export const BorderAnim10 = styled(Grid)({
  position: "absolute",
  top: "110px",
  left: "12%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.8s",
});

export const BorderAnim13 = styled(Grid)({
  position: "absolute",
  top: "100px",
  left: "15%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "5s",
});

export const BorderAnim11 = styled(Grid)({
  position: "absolute",
  top: "130px",
  left: "9%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.6s",
});

export const BorderAnim12 = styled(Grid)({
  position: "absolute",
  top: "140px",
  left: "12%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "4.8s",
});

export const BorderAnim14 = styled(Grid)({
  position: "absolute",
  top: "150px",
  left: "15%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "5s",
});

export const BorderAnim15 = styled(Grid)({
  position: "absolute",
  top: "100px",
  left: "30%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "5.9s",
});

export const BorderAnim16 = styled(Grid)({
  position: "absolute",
  top: "110px",
  left: "33%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.1s",
});

export const BorderAnim17 = styled(Grid)({
  position: "absolute",
  top: "120px",
  left: "36%",
  rotate: "30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.3s",
});

export const BorderAnim18 = styled(Grid)({
  position: "absolute",
  top: "150px",
  left: "30%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "5.9s",
});

export const BorderAnim19 = styled(Grid)({
  position: "absolute",
  top: "140px",
  left: "33%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.1s",
});

export const BorderAnim20 = styled(Grid)({
  position: "absolute",
  top: "130px",
  left: "36%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.3s",
});

export const BorderAnim21 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "39%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.5s",
});

export const BorderAnim22 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "42%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "6.7s",
});

export const BorderAnim23 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "57%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "7.4s",
});

export const BorderAnim24 = styled(Grid)({
  position: "absolute",
  top: "125px",
  left: "60%",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "7.6s",
});

export const BorderAnim25 = styled(Grid)({
  position: "absolute",
  top: "120px",
  left: "75%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "8.3s",
});

export const BorderAnim26 = styled(Grid)({
  position: "absolute",
  top: "110px",
  left: "78%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 0.2s ease-in-out forwards`,
  animationDelay: "8.5s",
});

export const BorderAnim27 = styled(Grid)({
  position: "absolute",
  top: "100px",
  left: "81%",
  rotate: "-30deg",
  height: "0.5",
  border: "0.5px solid #1194aa",
  width: "0",
  animation: `${drawLine1} 1s ease-in-out forwards`,
  animationDelay: "8.7s",
});

export const BoxRow = styled(Grid)({
  position: "absolute",
  flexDirection: "row",
  top: "45.5%",
  width: "77%",
  height: "60%",
  right: "0%",
});

export const BoxRow1 = styled(Grid)({
  position: "absolute",
  flexDirection: "row",
  width: "100%",
  height: "40%",
});

export const BoxColumn = styled(Grid)({
  position: "absolute",
  flexDirection: "row",
  width: "60%",
  height: "100%",
});

export const BoxRond = styled(Box)({
  display: "flex",
  width: "10%",
  height: "22%",
  borderRadius: "50%",
  backgroundColor: "#D1EBEF",
  marginRight: "10px",
  alignItems: "center",
  opacity: 0,
  justifyContent: "center",
  animation: `${drawOpacity} 0.5s ease-in-out forwards`,
});

export const ImageHtml = styled("img")({
  display: "flex",
  width: "65%",
  height: "65%",
  marginLeft: "2px",
  animation: `${drawOpacity} 0.5s ease-in-out forwards`,
});

export const TextFront = styled(Typography)({
  fontSize: "15px",
  color: "#1194aa",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  marginTop: "230px",
  marginLeft: "6.5%",
  animation: `${drawOpacity} 0.5s ease-in-out forwards`,
  opacity: 0,
});

export const TextBack = styled(Typography)({
  fontSize: "15px",
  color: "#1194aa",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  marginTop: "230px",
  marginLeft: "6.5%",
  animation: `${drawOpacity} 0.5s ease-in-out forwards`,
  opacity: 0,
});

export const TextBaseDeDonne = styled(Typography)({
  fontSize: "15px",
  color: "#1194aa",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "400",
  marginTop: "160px",
  marginLeft: "3%",
  animation: `${drawOpacity} 0.5s ease-in-out forwards`,
  opacity: 0,
});

export const CardSkills = styled(Grid)({
  position: "absolute",
  flexDirection: "row",
  left: "65%",
  width: "30%",
  height: "80%",
  top: "10%",
  borderRadius: "20px",
  border: "1px solid #1194AA",
  boxShadow: "0px 0px 50px -25px rgba(66, 68, 90, 1)"
});
