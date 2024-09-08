import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

const initial = [
  { name: "Kitchen", id: 1, isOn: false },
  { name: "Living-room", id: 2, isOn: false },
  { name: "Bedroom", id: 3, isOn: false },
  { name: "Bathroom", id: 4, isOn: false },
  { name: "Garage", ide: 5, isOn: false },
  { name: "Porch", ide: 6, isOn: false },
  { name: "Garden", ide: 7, isOn: false },
  { name: "Office", ide: 8, isOn: false },
];
export default function Light({ name }) {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
