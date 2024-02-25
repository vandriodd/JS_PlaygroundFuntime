// * Function Types
import React from "react";

export const functionTypes = () => {
  return <div>functionTypes</div>;
};

interface Car {
  model: string;
  year: number;
  // the name of the parameter doesn't need to match the name of the property
  setYear: (nextYear: number) => void;
  setModel: (newModel: string) => void;
  getDescription: () => string;
}

// We can also specify the type of a function
// and add it to an interface
// ! Synatx
// function name: (parameter: type, parameter:type, ...) => returnType

const chevrolet: Car = {
  model: "Mustang",
  year: 2021,
  setYear(nextYear: number) {
    this.year = nextYear;
  },
  setModel(newModel: string) {
    this.model = newModel;
  },
  getDescription() {
    return `Car: ${this.model}, Year: ${this.year}`;
  },
};

chevrolet.setModel(); // and now typescript tell us the parameters we need to pass

// * Function Types in Props Interfaces
// We can also use function types in props interfaces
// ! Syntax
// interface InterfaceName {
//   function: (parameter: type) => returnType;
// }

interface ColorPickerProps {
  color: string[];
  handleColorSelect: (color: string) => void;
}

function ColorPicker({ colors, handleColorSelect }: ColorPickerProps) {
  const renderedColors = colors.map((color) => {
    return (
      <button key={color} onClick={() => handleColorSelect(color)}>
        {color}
      </button>
    );
  });

  return <div>{renderedColors}</div>;
}
