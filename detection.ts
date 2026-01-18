//CORE CONCEPTS OF TYPE NARROWING

//typeof checks
//Use typeof to narrow to primitive types.
function detectType(val: number | string): string | number {
  return typeof val === "string" ? val.toLowerCase() : val + 3;
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}


//instanceof checks (classes)
//Use instanceof to narrow to class instances.
class Animal { move() {} }
class Bird extends Animal { fly() {} }

function act(a: Animal) {
  if (a instanceof Bird) {
    a.fly();  // a: Bird
  } else {
    a.move(); // a: Animal
  }
}




//in operator (property existence)
//Use "prop" in obj to narrow based on whether a property exist
type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };
type Shape = Square | Circle;

function area(s: Shape) {
  if ("size" in s) return s.size * s.size;     // s: Square
  return Math.PI * s.radius * s.radius;        // s: Circle
}


//Narrowing with in operator
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
























































































































































































