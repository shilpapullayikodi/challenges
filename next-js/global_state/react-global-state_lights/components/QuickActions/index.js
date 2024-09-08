import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleTurnAllOff, handleTurnAllOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={() => handleTurnAllOff()}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => handleTurnAllOn()}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
