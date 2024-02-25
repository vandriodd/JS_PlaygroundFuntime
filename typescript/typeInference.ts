interface Car {
  model: string;
  year: number;
}

function printCar(car: Car) {
  console.log(car);
}

const mustang = {
  model: "Mustang",
  year: 2021,
};

// Error because the object doesn't match the Car interface
// but if we change the year to a string and we not specify the interface, it will work
const camaro: Car = {
  model: "Camaro",
  year: "2022",
};
