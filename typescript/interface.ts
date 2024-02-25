// Typescrcipt doesn't understand the type of the car object
function formatCar(car) {
  return `Car: ${car.make}, ${car.model}, ${car.year}`;
}

formatCar({ make: "Porsche", model: "911", year: 2019 });

// We can define the type of the car object using 2 different methods

// Method 1: Inline Annotation
function formatCar(car: { make: string; model: string; year: number }) {
  return `Car: ${car.make}, ${car.model}, ${car.year}`;
}

// Method 2: Interface
// Now we can use the interface elsewhere in our code
interface Car {
  year: number;
  make: string;
  model: string;
}

function formatCar(car: Car) {
  return `Car: ${car.make}, ${car.model}, ${car.year}`;
}
