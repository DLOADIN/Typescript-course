type Person = {
    readonly _id: number;
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

function Ourpeople(packages: Person): Person {
    console.log(packages._id, packages.name, packages.traits, packages.isActive); 
    return packages;
}

Ourpeople({
    _id: 1,
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