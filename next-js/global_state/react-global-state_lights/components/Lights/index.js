import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ isOn, handleToggle }) {
  return (
    <StyledLights>
      <li>
        <Light isOn={isOn} name="Living Room" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Kitchen" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Bedroom" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Bathroom" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Garage" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Porch" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Garden" handleToggle={handleToggle} />
      </li>
      <li>
        <Light isOn={isOn} name="Office" handleToggle={handleToggle} />
      </li>
    </StyledLights>
  );
}
