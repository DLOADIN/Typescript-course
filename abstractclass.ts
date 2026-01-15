abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

     abstract getSepia(): void;
     getReelTime(): number{
        return 8;
     }

}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public speed: number
    ){
        super(cameraMode, filter, burst);
    }
    getSepia(): void {
        console.log("Sepia");
    }
}


// This is another example of abstract class
abstract class Subject{
    abstract StudentName(): string;
}

class StudentOne extends Subject{
    StudentName(): string {
        return "Jean DOE";
    }
}

class StudentTwo extends Subject{
    StudentName(): string {
        return "John DOE";
    }
}


// This is another example of abstract class about Toys and A child playing with them
abstract class Toy {
  abstract play(): void; // Every toy must have a way to play
}

class ToyCar extends Toy {
  play(): void {
    console.log("Push the car, it moves 🚗");
  }
}

class Doll extends Toy {
  play(): void {
    console.log("Dress the doll, it smiles 👧");
  }
}

function childPlay(toy: Toy) {
  toy.play(); // Child doesn’t care how it works internally
}

childPlay(new ToyCar()); // Output: Push the car, it moves 🚗
childPlay(new Doll());   // Output: Dress the doll, it smiles 👧