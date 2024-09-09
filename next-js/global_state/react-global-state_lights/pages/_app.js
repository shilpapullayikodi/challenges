import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initial = [
  { isOn: false, id: 1, name: "Living Room" },
  { isOn: false, id: 2, name: "Kitchen" },
  { isOn: false, id: 3, name: "Bedroom" },
  { isOn: false, id: 4, name: "Bathroom" },
  { isOn: false, id: 5, name: "Garage" },
  { isOn: false, id: 6, name: "Porch" },
  { isOn: false, id: 7, name: "Garden" },
  { isOn: false, id: 8, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initial);
  const lightsOnCount = lights.filter((light) => light.isOn === true).length; //get all lights which is turened on.

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn }; //if the id matches which we clicked then toggle, else return the old array
        }
        return light;
      })
    );
  }
  function handleTurnAllOff() {
    //
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false }; //while looping it will change all objects to false
      })
    );
  }
  function handleTurnAllOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsOnCount={lightsOnCount}
        handleTurnAllOn={handleTurnAllOn}
        handleTurnAllOff={handleTurnAllOff}
      />
    </Layout>
  );
}
