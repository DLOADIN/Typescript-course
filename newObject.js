function Ourpeoples(package) {
    console.log(package.name, package.traits, package.isActive  );
    return package;
}
Ourpeoples({
    name: "Jean",
    traits: {
        skintone: 'lightskin',
        height: '1.90m',
        weight: '70kg',
        complexion: 'fair',
    },
    age: 21,
    gender: 'male',
    isActive: true,
});
