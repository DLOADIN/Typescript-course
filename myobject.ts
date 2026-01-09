const User ={
    name: "Jean",
    age: 23,
    gender: "Male",
    isActive: true,
}

function Usersme(name:string, age: number | string, gender: string, MyActive:boolean): object {
    let User =   {
        name: 'Manzi',
        age: 12,
        gender: 'male',
        isActive: true,
    }
    return User;
}

console.log(Usersme(User.name, User.age, User.gender, User.isActive))

export {}