type Person = {
    name: string;
    traits:{
        skintone: string;
        height: string;
        weight: string;
        complexion: string;
    }
    age: number;
    gender: string;
    isActive: boolean;

}

function Ourpeople(package: Person): Person {
    console.log(package.name, package.traits, package.isActive); 
    return package;
}

Ourpeople({
    name: "Jean",
    traits:{
        skintone: 'lightskin',
        height: '1.90m',
        weight: '70kg',
        complexion: 'fair',
    },
    age: 21,
    gender: 'male',
    isActive: true,
})