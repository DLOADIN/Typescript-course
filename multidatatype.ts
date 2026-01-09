type FamilyONe = {
    thename: string
    id: number
}

type FamilyTwo = {
    username: string
    id: boolean
}

let mane: FamilyONe | FamilyTwo = { thename: "Game", id: 11 }

let constanti : (number | string | boolean )[] = [1, 'Amazed', true ]


//if you do want to create a constant that is different with the usual const use this

let pi:3.14 = 3.14;
//  pi = 2;(Type '2' is not assignable to type '3.14'.)
//More of this

let Amapiano: 'kabza De Small' | 1 | true;

//Amapiano = false
//Type 'false' is not assignable to type 'true | "kabza De Small" | 1'