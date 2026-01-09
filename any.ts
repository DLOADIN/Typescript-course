//how to use any in typescript

let hero:any = '';

function getHero(string :'Ironman'): any{
 return true ? 'Ironman' : 1234;
}

hero = getHero('Ironman');
console.log(hero);

export {}