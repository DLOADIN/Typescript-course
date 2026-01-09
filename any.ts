//how to use any in typescript

let hero:any = '';

function getHero(){
 return true ? 'Ironman' : 1234;
}

hero = getHero();

export {}