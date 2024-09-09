import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, setMountain] = useState({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    event.preventDefault();
    const form = event.target;
    const searchName = form.elements.searchTerm.value;
    console.log("A new search term was submitted:", searchName);
    setMountain((prevSession) => {
         return prevSession.map((s) => {
          if(s.number !== seasonNumber) {
           return s;
         } 
      return {
        ...s,
         episodes: s.episodes.map((e) => {
         if(e.number !== episodeNumber) {
          return e;
         }
        return {
          ...e,
         hasSeen: !e.hasSeen
         }
         })
        }
       })
      })

  function handleAltitudeChange(event) {}

  function handleMountainRangeChange(event) {}

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
