import StyledBox from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
//import BoxWithStyledComponets from "../components/BoxWithStyledComponents.js";
export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </div>
  );
}
