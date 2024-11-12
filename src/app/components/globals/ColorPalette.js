import React from 'react';
import styled from 'styled-components';

// Styled component for the Color Palette
const PaletteContainer = styled.div`
  display: flex;
  justify-content: center; /* Center palette */
  flex-wrap: wrap; /* Allow wrapping on small screens */
  margin: 2rem 0;
`;

// Styled component for each color block
const ColorBlock = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #000; /* Border around colors */
`;

const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0f033', '#ff33f0'];

const ColorPalette = () => {
  return (
    <PaletteContainer>
      {colors.map((color) => (
        <ColorBlock key={color} style={{ backgroundColor: color }} />
      ))}
    </PaletteContainer>
  );
};

export default ColorPalette;
