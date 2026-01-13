class Getters{
    private _courseCount: number = 1;

    constructor(
        public name: string, 
        private email: string){
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum: number) {
    if (courseNum <= 1) {
     throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
}
}

let User = new Getters('Jean', 'dav12@gmail.com'); 
console.log(User.name);