import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    event.preventDefault();

    updateMountain((draft) => {
      draft.name = event.target.value;
      // console.log("A new search term was submitted:", draft.name);
    });
  }
  function handleAltitudeChange(event) {
    event.preventDefault();

    updateMountain((draft) => {
      draft.values.altitude = event.target.value;
      // console.log("A new search term was submitted:", draft.values.altitude);
    });
  }

  function handleMountainRangeChange(event) {
    event.preventDefault();

    updateMountain((draft) => {
      draft.values.mountainRange = event.target.value;
      // console.log(
      //   "A new search term was submitted:",
      //   draft.values.mountainRange
      // );
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
