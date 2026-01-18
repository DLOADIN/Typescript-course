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
type Shapes= Square | Circle;

function areas(s: Shapes) {
  if ("size" in s) return s.size * s.size;     // s: Square
  return Math.PI * s.radius * s.radius;        // s: Circle
}


//Exhaustiveness with never
//Use never to ensure all union members are handled—great for discriminated unions.
type Shape = 
  | { kind: "square"; size: number }
  | { kind: "circle"; radius: number };

function area(s: Shape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "circle": return Math.PI * s.radius * s.radius;
    default: {
      const _exhaustive: never = s; // compile error if a new kind is added
      return _exhaustive;
    }
  }
}



//Literal type checks and Comparing against literals narrows to specific union members
type Status = "idle" | "loading" | "error";

function label(s: Status) {
  if (s === "loading") return "Please wait…"; // s: "loading"
  if (s === "error") return "Something went wrong"; // s: "error"
  return "Ready"; // s: "idle"
}



//Nullish or falsy checks narrow unions with null/undefined.
function greet(name?: string) {
  if (!name) return "Hello, stranger"; // name: undefined | "" | null | etc.
  return `Hello, ${name}`;             // name: string (truthy)
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
























































































































































































