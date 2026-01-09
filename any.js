"use strict";
//how to use any in typescript
Object.defineProperty(exports, "__esModule", { value: true });
var hero = '';
function getHero(string) {
    return true ? 'Ironman' : 1234;
}
hero = getHero('Ironman');
console.log(hero);
